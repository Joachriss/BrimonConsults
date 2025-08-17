import { Outlet } from "react-router"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/navbar/Navbar"
import { ToTop } from "../components/buttons/ToTop"
import { ContactUs } from "../components/buttons/ContactUs"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-10"></div>
      <Outlet />
      <ToTop />
      <ContactUs />
      <Footer />
    </>
  )
}
