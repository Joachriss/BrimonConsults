import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { Loader } from "../src/components/Loader";

type AuthContextType = {
    user: {
        id: string | null;
        name: string | null;
        email: string | null;
        image: string | null;
        role: string | null;
    };
    setUser: React.Dispatch<React.SetStateAction<AuthContextType["user"]>>;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, confirmPassword: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
    isLoggedIn?: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

// creating a provider
export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const [user, setUser] = useState<AuthContextType["user"]>({
        id: null,
        name: null,
        email: null,
        image: null,
        role: null,
    });

    const [loading, setLoading] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


    const navigate = useNavigate();

    // authenticating user session
    const getProfile = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/auth/getprofile`);
            if (response?.data?.user) {
                setUser({
                    id: response.data.user._id,
                    name: response.data.user.name,
                    email: response.data.user.email,
                    image: response.data.user.image || null,
                    role: response.data.user.role
                });
                setIsLoggedIn(true);
            } else {
                throw new Error("No user found");
            }

        } catch (err: any) {
            if (err.response.status === 401) {
                setIsLoggedIn(false);
            }
            console.log("Profile error:", err.response.data.error);
            setUser({ id: null, name: null, email: null, image: null, role: null });
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (!(window.location.pathname.includes('/auth') || window.location.pathname.includes('/admin'))) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
        getProfile();

    }, []);

    // login
    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await axios.post('/auth/login', { email, password });

            if (response.data.error) {
                throw new Error(response.data.error);
            }

            // role check
            if (['ADMINISTRATOR', "MANAGER", 'STAFF'].includes(response.data.user.role)) {
                await getProfile();
                toast.success(response.data.message);
                if (location.state) {
                    navigate(location.state.from, { replace: true });
                } else {
                    navigate('/admin/dashboard', { replace: true });
                }
            } else {
                throw new Error("Unauthorized access");
            }
        }
        catch (error: any) {
            console.error("Login error:", error);
            setLoading(false);
            let message = "Something went wrong, please try again";

            // Axios error
            if (error.response?.data?.error) {
                message = error.response.data.error;
            }
            // Custom thrown Error
            else if (error.message) {
                message = error.message;
            }

            toast.error(message);
        }
    };


    // register
    const register = async (name: string, email: string, password: string, confirmPassword: string) => {
        try {
            setLoading(true);
            const response = await axios.post('/auth/register', { name, email, password, confirmPassword });
            if (response.data.error) {
                toast.error(response.data.error);
                return;
            }
            toast.success(response.data.message);
            navigate('/auth/login', { replace: true });

        }
        catch (error: any) {
            console.log(error.response.data.error);
            toast.error(error.response.data.error);
        }
        finally {
            setLoading(false);
        }
    }


    // logout
    const logout = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/auth/logout');
            toast.success(response.data.message);
            setUser({ id: null, name: null, email: null, image: null, role: null });
            localStorage.removeItem('token');
            navigate('/auth/login');
        } catch (error: any) {
            toast.error(error.response.data.error);
        }
        finally {
            setLoading(false);
        }
    }


    // loading state
    {
        if (!(window.location.pathname.includes('/auth') || window.location.pathname.includes('/admin'))) {
            if (loading) {
                return <Loader />
            }
        }
    }


    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading, isLoggedIn, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}
