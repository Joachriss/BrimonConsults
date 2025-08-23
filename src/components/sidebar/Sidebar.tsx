import { MdClose, MdLogout } from "react-icons/md";
import { useAuth } from "../../../context/AuthContext";
import { allMenus } from "../../router"
import { Link, NavLink } from "react-router"
import type { Dispatch } from "react";
type TProps = {
    setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>
}
export const Sidebar = ({setIsSidebarOpen }: TProps) => {
    const { logout } = useAuth();
    const isActive = ({ isActive }: any) => isActive ? 'flex flex-row gap-2 items-center text-xs px-3 py-2 rounded-lg bg-pink-800 font-bold duration-300' : 'flex flex-row gap-2 items-center text-xs px-3 py-2 rounded-lg hover:bg-pink-800 hover:font-bold duration-300';
    return (
        <aside className="flex flex-col w-full gap-y-3">
            <div className="flex flex-row justify-between md:justify-start items-center">
                <Link to="/admin/dashboard" className="mb-5">
                    <img src="/logo/Logo-dark.png" className="w-[40%]" alt="logo" />
                </Link>
                <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
                    <MdClose className="cursor-pointer text-white md:hidden w-6 h-6" />
                </button>
            </div>
            {
                allMenus.map((menu, index) => (
                    <div key={index} >
                        <h1 className="font-bold my-2 text-sm">{menu.label}</h1>
                        <div className="flex flex-col gap-1">
                            {
                                menu.subMenu?.map((sub, index) => (
                                    <NavLink to={sub.path} key={index} onClick={() => setIsSidebarOpen(false)} className={isActive}>
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

