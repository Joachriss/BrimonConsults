import { useState } from "react";
import logo_light from "/logo/Logo-light.png";
import { Btn } from "../buttons/Btn";
import { Link, NavLink } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const linkActive = "block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-[#d94a68] lg:p-0 dark:text-white";
    const linkInactive = "block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-black lg:p-0 dark:text-white hover:text-[#c94a68]";
    const linkActiveMobile = " text-[#d94a68] px-6 py-2 text-lg rounded-lg hover:font-bold w-full font-bold scale-105";
    const linkInactiveMobile = " text-[#d94a68] px-6 py-2 text-lg rounded-lg hover:font-bold w-full";

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="fixed t-0 w-full z-50" >
            <div className="bg-linear-to-r from-[#d94766] to-[#194062] text-sm text-white py-1 flex-row px-5 hidden md:flex items-center gap-x-5">
                <a href="https://www.instagram.com/brimonconsults?igsh=MWFqaXV3bjJ4d3U0Zw%3D%3D&utm_source=qr" target="_blank" className="flex flex-row items-center gap-x-2">
                    <FaInstagram size={20} />
                    <p>Follow us on Instagram</p>
                </a>
                <a href="tel:255760941503" className="ml-auto">Call us on +255 760 941 503</a>
            </div>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logo_light} className="w-18 md:w-20 mr-2" alt="Brimonconsults Logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">

                        <Btn name="Book a Meeting" w='md:min-w-44' location="contacts" />
                        <button onClick={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? '' : 'hidden'} items-center justify-between  w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}>
                        <ul className="md:flex hidden mt-4 font-medium flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}
                                    aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/company"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}>Company</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/news"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}>News&Press</NavLink>
                            </li>
                            <li>
                                <NavLink to="/team"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}>Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="contacts"
                                    className={({ isActive }) => isActive ? linkActive : linkInactive}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Backdrop */}
            <div onClick={toggleMenu} className={`absolute md:hidden top-0 left-0 w-full h-screen bg-black/50 p-4 transform ${isOpen ? "" : "hidden"} duration-300 z-50`}></div>

            {/* Mobile menu */}
            <div className={`${isOpen ? "translate-x-0" : "translate-x-[-100%]"} shadow md:hidden duration-300 bg-white fixed h-screen top-0 left-0 w-[80%] md:w-[30%] py-4 px-4 z-60`}>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={toggleMenu}>
                        <img src={logo_light} className="w-20" alt="" />
                    </Link>
                    <button onClick={toggleMenu} className="p-1">
                        <MdClose size={22} />
                    </button>
                </div>
                <div className="flex flex-col gap-3 py-4 mt-3">
                    <div className="flex flex-col">
                        <h4 className="text-[#CCA034]-600 text-lg font-bold ">Menu</h4>
                        <hr className="border-2 my-2 border-stone-300" />
                    </div>
                    <NavLink onClick={toggleMenu} to={"/"} className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>Home</NavLink>
                    <NavLink onClick={toggleMenu} to="/company" className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>Company</NavLink>
                    <NavLink onClick={toggleMenu} to="/services" className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>Services</NavLink>
                    <NavLink onClick={toggleMenu} to="/projects" className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>Projects</NavLink>
                    <NavLink onClick={toggleMenu} to="/news" className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>News & Press</NavLink>
                    <NavLink onClick={toggleMenu} to="/team" className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>Team</NavLink>
                    <NavLink onClick={toggleMenu} to="/contacts" className={({ isActive }) => isActive ? linkActiveMobile : linkInactiveMobile}>Contact</NavLink>
                    <Link onClick={toggleMenu} to={"#"} className="mt-6 bg-[#d94a68] text-center text-white px-6 py-3 rounded-lg hover:bg-[#194062]">Book Now</Link>
                    <hr className="border-2 my-2 border-stone-300" />
                    <div className="flex fle-row gap-2 justify-between p-1 mt-3">
                        <div className="flex gap-4 items-center">
                            <Link to="https://www.facebook.com/share/1E2mHwUVvc/?mibextid=wwXIfr" className="flex flex-row items-center gap-4">
                                <FaFacebookF size={27} className="text-[#1047c0]" />
                                {/* <div>Facebook</div> */}
                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link to="https://www.instagram.com/brimonconsults?igsh=MWFqaXV3bjJ4d3U0Zw%3D%3D&utm_source=qr" className="flex flex-row items-center gap-4">
                                <FaInstagram size={27} className="text-[#e6224d]" />
                                {/* <div>Instagram</div> */}
                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link to="https://x.com/brimonconsults?s=21" className="flex flex-row items-center gap-4">
                                <FaXTwitter size={27} className="text-[#000000]" />
                                {/* <div>X</div> */}
                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link to="https://www.linkedin.com/company/brimon-consults/" className="flex flex-row items-center gap-4">
                                <FaLinkedinIn size={27} className="text-[#1d44f2]" />
                                {/* <div>Linkedin</div> */}
                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link to="https://www.youtube.com/@brimonconsults" className="flex flex-row items-center gap-4">
                                <FaYoutube size={27} className="text-[#FF0000]" />
                                {/* <div>Youtube</div> */}
                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link to="https://www.tiktok.com/@brimon.consults" className="flex flex-row items-center gap-4">
                                <FaTiktok size={27} className="text-[#000000]" />
                                {/* <div>Tiktok</div> */}
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </header >
    )
}
