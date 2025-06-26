import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"

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
        <div className={`${isScrolled ? "flex flex-col" : "hidden"} fixed  space-y-7 bg-white bottom-10 md:bottom-[40%] cursor-pointer left-10 z-50 py-4 px-2 rounded-2xl shadow-lg `}>
            <FaPhone size={24} className="text-green-900" />
            <FaInstagram size={24} className="text-[#d94a68]" />
            <FaFacebook size={24} className="text-blue-600" />
            <FaTwitter size={24} className="text-blue-400" />
        </div>
    )
}
