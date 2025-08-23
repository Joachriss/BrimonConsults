import { Navigate, Outlet, useLocation } from "react-router"
import { Sidebar } from "../components/sidebar/Sidebar"
import { DashboardNavbar } from "../components/navbar/DashboardNavbar"
import { useAuth } from "../../context/AuthContext"
import { Loader } from "../components/Loader"
import { useState } from "react"

export const DashboardLayout = () => {
  const location = useLocation();
  const { isLoggedIn, loading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (loading) { return <Loader /> }

  // Simple admin dashboard access check
  if (!isLoggedIn) {
    return <Navigate to={'/auth/login'} state={{ from: location.pathname }} />
  }

  return (
    <div className="grid w-full grid-cols-12 relative">
      <div className={`md:col-span-2 h-screen fixed w-[100%] backdrop-blur-lg md:backdrop-blur-none duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-fit md:sticky top-0 left-0 z-60 text-white `}>
        <div className="w-[70%] md:w-full sticky top-0 ov p-6 bg-[#194062] h-screen  overflow-y-auto">
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </div>
      </div>
      <div className="flex flex-col col-span-full md:col-span-10">
        <div className="text-black w-full z-20 sticky top-0 bg-white shadow">
          <DashboardNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        <div className="overflow-y-auto p-2 sm:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
