import { motion } from "motion/react";
import { FaAngleDoubleDown, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router";

export const HeroSection = () => {
  const scrollDown = () => {
    scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900 relative">
      {/* Background Video */}
      <div className="h-screen w-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/projects100/Iyumbu/video22.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay Content */}
      <div className="absolute z-0 h-screen inset-0 top-0 bg-black/50 w-full">
        <div className="lg:col-span-5 h-screen max-w-screen-xl grid px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 ">
          <div className="mr-auto place-self-center lg:col-span-7 h-3/4 md:h-full flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl text-white xl:text-6xl dark:text-white">
              Building Sustainable Futures, <br />One Project at a Time.
            </motion.h1>

            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
              By integrating eco-friendly practices, innovative technologies, and community engagement, 
              we strive to leave a lasting impact on both the environment and the lives of those we serve.
            </p>

            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 1 }}
              className="w-1/2 mb-5 border-4 border-[#d94766]"
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="company"
                className="inline-flex bg-[#d94766] items-center justify-center px-5 py-3 text-sm font-medium rounded-lg hover:bg-[#194062] focus:ring-4 focus:ring-gray-100 text-white transition"
              >
                Learn more
              </Link>

              <a
                href="#projects"
                className="inline-flex bg-transparent border border-white hover:text-white items-center justify-center px-5 py-3 text-sm font-medium rounded-lg hover:bg-[#194062] focus:ring-4 focus:ring-gray-100 text-white transition"
              >
                Our projects
              </a>

              {/* JCM New Download Button */}
              <a
                href="/docs/Brimon_Consults_Company_Profile_April_2025.pdf" // put your actual path
                download="Brimon_Consults_Company_Profile_April_2025.pdf"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-lg bg-white text-[#194062] hover:bg-gray-200 transition"
              >
                <FaFileDownload className="mr-2" />
                Company Profile
              </a>
            </div>

            {/* Mobile Scroll Down */}
            <div className="w-full flex items-end ">
              <FaAngleDoubleDown
                onClick={scrollDown}
                size={30}
                className="md:hidden block cursor-pointer ms-auto animate-bounce mt-2 text-white"
              />
            </div>
          </div>

          {/* Desktop Scroll Down */}
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-fit md:h-full">
            <FaAngleDoubleDown
              onClick={scrollDown}
              size={90}
              className="cursor-pointer ms-auto animate-bounce mt-[80%] text-[#d94766]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
