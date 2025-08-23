import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const ContactUs = () => {
    const vueHeight = window.innerHeight / 2;
    const [actualHeight, setActualHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleScroll=  ()=>  {
            setActualHeight(window.scrollY - vueHeight);
            if (actualHeight > vueHeight) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [actualHeight, vueHeight, isScrolled]);
    return (
        <div className={`${isScrolled ? "sm:flex flex-col hidden " : "hidden"} fixed  space-y-7 bg-white bottom-10 md:bottom-[30%] cursor-pointer left-3 z-50 py-4 px-2 rounded-2xl shadow-lg `}>
            <a href="tel:255760941503"><FaPhone size={24} className="text-green-900" /></a>
            <a href="https://www.instagram.com/brimonconsults?igsh=MWFqaXV3bjJ4d3U0Zw%3D%3D&utm_source=qr" target="_blank"><FaInstagram size={24} className="text-[#d94a68]" /></a>
            <a href="https://www.linkedin.com/company/brimon-consults/" target="_blank"><FaLinkedin size={24} className="text-[#0077B5]" /></a>
            <a href="https://www.facebook.com/share/1E2mHwUVvc/?mibextid=wwXIfr" target="_blank"><FaFacebook size={24} className="text-blue-600" /></a>
            <a href="https://x.com/brimonconsults?s=21" target="_blank"><FaXTwitter size={24} className="text-[#000008]" /></a>
        </div>
    )
}
