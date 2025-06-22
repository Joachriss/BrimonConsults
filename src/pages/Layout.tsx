import { Outlet } from "react-router"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { ToTop } from "../components/buttons/ToTop"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-10"></div>
      <Outlet />
      <ToTop />
      <Footer />
    </>
  )
}
