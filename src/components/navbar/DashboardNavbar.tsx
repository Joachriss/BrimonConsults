import { MdLogout } from "react-icons/md";
import { useAuth } from "../../../context/AuthContext";

export const DashboardNavbar = () => {
  const { user, logout } = useAuth();
  return (
    <header className="flex flex-row items-center justify-end text-black w-full">
      <nav className="w-full flex justify-end gap-4 p-3">


        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col text-end">
            <div className="text-xs text-gray-500">{user.role}</div>
            <p className="text- text-black">{user.name}</p>
          </div>
          <div className="rounded-full border-3 border-pink-700 h-10 w-10 bg-pink-300 flex text-xl items-center justify-center">
            {
              user.image ?
                <img src={user.image} alt={user.name || "User Avatar"} className="w-full h-full rounded-full object-cover" />
                :
                user.name?.slice(0, 1)
            }
          </div>
          <MdLogout onClick={() => logout()} className="cursor-pointer" size={27} />
        </div>
      </nav>
    </header>
  )
}
