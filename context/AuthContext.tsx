import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router";

type AuthContextType = {
    user: { id: string | null; name: string | null; email: string | null; role: string | null; };
    setUser: React.Dispatch<React.SetStateAction<AuthContextType["user"]>>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading?: boolean;
    isLoggedIn?: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

// creating a provider
export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthContextType["user"]>({
        id: null,
        name: null,
        email: null,
        role: null,
    });

    const [loading, setLoading] = useState<boolean>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);


    const navigate = useNavigate();

    // authenticating user session
    const getProfile = async () => {
        try {
            const response = await axios.get(`/auth/getprofile`);

            if (response.data && response.data.user) {
                setUser({
                    id: response.data.user._id,
                    name: response.data.user.name,
                    email: response.data.user.email,
                    role: response.data.user.role
                });
                setIsLoggedIn(true);
            } else {
                setUser({ id: null, name: null, email: null, role: null });
                localStorage.removeItem('token');
                setIsLoggedIn(false);
            }

        } catch (err: any) {
            if (err.response.status === 401) {
                setIsLoggedIn(false);
                localStorage.removeItem('token');
            }
            console.log("Profile error:", err.response.data.error);
            setUser({ id: null, name: null, email: null, role: null });
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        getProfile();
    }, []);

    // login
    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await axios.post('/auth/login', { email, password });

            if (!response.data.user) {
                toast.error("No user data found");
                return;
            }

            if (response.data.user.role === 'staff') {
                await getProfile();
                toast.success(response.data.message);
                setLoading(false);
                navigate('/staff/dashboard', {replace: true});
            } else {
                setLoading(false);
                toast.error(response.data.error);
            }
        }
        catch (error: any) {
            setLoading(false);
            console.log(error.response.data.error);
            toast.error(error.response.data.error);
        }
    }


    // logout
    const logout = async () => {
        try {
            const response = await axios.post('/auth/logout');
            toast.success(response.data.message);
            setUser({ id: null, name: null, email: null, role: null });
            localStorage.removeItem('token');
            navigate('/auth/login');
        } catch (error: any) {
            toast.error(error.response.data.error);
        }
    }
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading, isLoggedIn }}>
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
