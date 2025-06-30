import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5"

export const ToTop = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY === 0) {
                setIsTop(true);
            }else {
                setIsTop(false);
            }
        })
    },[isTop]);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <button onClick={goToTop} className={`fixed ${isTop ? "hidden" : "block"} bottom-10 cursor-pointer md:right-10 right-3 z-50 bg-[#d94a68] border border-white p-2 rounded-xl `}>
        <IoArrowUp size={25} className="text-white"/>
    </button>
  )
}
