import { motion } from "motion/react"
import { FaAngleDoubleDown } from "react-icons/fa"
import { Link } from "react-router"


export const HeroSection = () => {
  const scrollDown = () => {
    scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }
  return (
    <section className="bg-white dark:bg-gray-900 relative">
      <div className="h-screen w-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/projects100/Iyumbu/video22.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute z-0 h-screen inset-0 top-0 bg-black/50  w-full ">
        <div className="lg:col-span-5 h-screen max-w-screen-xl grid px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 ">
          <div className="mr-auto place-self-center lg:col-span-7 h-3/4 md:h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl text-white xl:text-6xl dark:text-white">
              Building Sustainable Futures, <br />One Project at a Time.
            </motion.h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">This
              By intergrating eco-friendly practices, innovative technologies, and community engagement, we strive to leave a lasting impact on both the enviroment and the lices of those we serve
            </p>
            <motion.hr 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.7, delay: 1 }}
            className="w-1/2 mb-5 border-4 border-[#d94766]"/>
            <div className="space-y-4 text-center space-x-2 sm:flex sm:space-y-0 sm:space-x-4">
              <Link to="company"
                className="inline-flex bg-[#d94766] items-center justify-center px-5 py-3 text-sm font-medium text-center  rounded-lg sm:w-auto hover:bg-[#194062] focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Learn more
              </Link>
              <a href="#projects" className="inline-flex bg-transparent border border-[#FFF] hover:text-[#FFF] items-center justify-center px-5 py-3 text-sm font-medium text-center  rounded-lg sm:w-auto hover:bg-[#194062] focus:ring-4 focus:ring-gray-100 text-[#FFF] dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Our projects
              </a>
            </div>
            <div className="w-full flex items-end ">
              <FaAngleDoubleDown onClick={scrollDown} size={30} className="md:hidden block cursor-pointer ms-auto animate-bounce mt-2 text-[#fff]" />
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-fit md:h-full">
            <FaAngleDoubleDown onClick={scrollDown} size={90} className=" cursor-pointer ms-auto animate-bounce mt-[80%] text-[#d94766]" />
          </div>
        </div>
      </div>
    </section>
  )
}
