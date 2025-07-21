import { Outlet } from "react-router"
import { ToTop } from "../components/buttons/ToTop"
import { Sidebar } from "../components/sidebar/Sidebar"
import { DashboardNavbar } from "../components/DashboardNavbar"

export const DashboardLayout = () => {
  return (
    <div className="grid w-screen grid-cols-12 relative">
      <div className="col-span-2 h-screen p-6 sticky top-0 z-20 text-white overflow-y-auto bg-[#194062]">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-10">
        <div className="p-5 text-white w-full z-20 sticky top-0 bg-[#]">
          <DashboardNavbar/>
        </div>
        <div className="overflow-y-auto">
          content
          <Outlet />
        </div>
      </div>
      <ToTop />
    </div>
  )
}
