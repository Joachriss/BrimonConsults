import { Navigate, Outlet, useLocation } from "react-router"
import { Sidebar } from "../components/sidebar/Sidebar"
import { DashboardNavbar } from "../components/navbar/DashboardNavbar"
import { useAuth } from "../../context/AuthContext"
import { Loader } from "../components/Loader"

export const DashboardLayout = () => {
  const location = useLocation();
  const {isLoggedIn,loading} = useAuth();

  if (loading) {return <Loader/>}
  
  // Simple admin dashboard access check
  if(!isLoggedIn) {
    return <Navigate to={'/auth/login'} state={{from:location.pathname}}/>
  }
  return (
    <div className="grid w-full grid-cols-12 relative">
      <div className="col-span-2 h-screen p-6 sticky top-0 z-20 text-white overflow-y-auto bg-[#194062]">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-10">
        <div className="text-black w-full z-20 sticky top-0 bg-white shadow">
          <DashboardNavbar/>
        </div>
        <div className="overflow-y-auto p-2 sm:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
