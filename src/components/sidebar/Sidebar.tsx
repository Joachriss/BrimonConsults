import { MdLogout } from "react-icons/md";
import { useAuth } from "../../../context/AuthContext";
import { allMenus } from "../../router"
import { Link, NavLink } from "react-router"
export const Sidebar = () => {
    const { logout } = useAuth();
    const isActive = ({ isActive }: any) => isActive ? 'flex flex-row gap-2 items-center text-xs px-3 py-2 rounded-lg bg-pink-800 font-bold duration-300' : 'flex flex-row gap-2 items-center text-xs px-3 py-2 rounded-lg hover:bg-pink-800 hover:font-bold duration-300';
    return (
        <aside className="flex flex-col w-full gap-y-3">
            <Link to="/admin/dashboard" className="mb-5">
                <img src="/logo/Logo-dark.png" className="w-[40%]" alt="logo" />
            </Link>
            {
                allMenus.map((menu, index) => (
                    <div key={index} >
                        <h1 className="font-bold my-2 text-sm">{menu.label}</h1>
                        <div className="flex flex-col gap-1">
                            {
                                menu.subMenu?.map((sub, index) => (
                                    <NavLink to={sub.path} key={index} className={isActive}>
                                        {sub.icon}
                                        <div>{sub.label}</div>
                                    </NavLink>
                                ))
                            }

                        </div>
                    </div>
                ))
            }
            <div>
                <h1 className="font-bold my-4 text-sm">Extras</h1>
                <div className="flex flex-col gap-1">
                    <div onClick={() => logout()} className='flex flex-row gap-2 items-center text-xs px-3 py-2 rounded-lg hover:bg-pink-800 hover:font-bold duration-300'>
                        <MdLogout size={20} />
                        <div>Logout</div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

