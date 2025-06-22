import { AboutSection } from "../components/AboutSection"
import { Btn } from "../components/buttons/Btn"
import { BookingForm } from "../components/forms/BookingForm"
import { HeroSection } from "../components/HeroSection"
import { HowWeWork } from "../components/HowWeWork"
import { ProjectsSection } from "../components/ProjectsSection"
import { ServicesSection } from "../components/ServicesSection"
import { TeamSection } from "../components/TeamSection"
import logo_dark from "/logo/Logo-dark.png"
import { Faq } from "../components/Faq"
import { motion } from "motion/react"

export const Home = () => {

    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
            <HowWeWork />
            <TeamSection />







            <section className="bg-gray-50 dark:bg-gray-800">

                <div className="grid items-center grid-cols-1 md:grid-cols-4">
                    <div className="w-full h-[40vh] md:h-[70vh] bg-cover bg-center col-span-1 bg-[url('/projects100/Iyumbu/image4.webp')] md:col-span-3 overflow-hidden">
                        <div className="h-full md:text-center items-center bg-black/50 w-full flex flex-col justify-center  text-white">
                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                    fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p className="text-xl text-center font-medium text-white md:text-2xl">
                                    "We uphold directness,
                                    transparency, and
                                    honesty in all our
                                    actions"
                                </p>
                            </blockquote>

                            <figcaption className="flex mb-14 items-center justify-center mt-6 space-x-3">
                                <img className="w-10 " src={logo_dark} alt="profile picture" />
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-white">BRIMON CONSULTS</div>
                                    <div className="pl-3 text-sm font-bold text-[#d94766] dark:text-gray-400">Team </div>
                                </div>
                            </figcaption>

                            {/* <Btn name="Join Us" location="team" w={""} /> */}
                        </div>
                    </div>
                    <motion.div
                        initial={{ y: 5 }}
                        animate={{ y: -5 }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        className="-mt-10 z-20 md:-ml-10 flex flex-col justify-center items-center rounded-sm text-white bg-[#194062] border  min-h-3/4 p-5 w-3/4 mx-auto col-span-1 md:col-span-1"
                    >
                        <div className="text-lg font-bold text-gray-200">Let's Talk</div>
                        <div className="text-2xl font-bold mb-6">Need to Reach Us?</div>
                        <Btn name="Contact Us" location="contacts" w={""} />
                    </motion.div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900 pt-10">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-[#194062] lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
                    <div className="max-w-screen-md mx-auto">
                        <Faq />
                    </div>
                </div>
            </section >


            <section className="bg-gray-150 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-3 mx-auto text-center flex items-center flex-col">
                        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-[#194062] dark:text-white">
                            Build with us
                        </h2>
                        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                            Empowering excellence
                            through collaboration. Join
                            us in shaping innovation
                            and making impactful
                            contributions together
                        </p>
                        <Btn name='Contact Us' w={"md:min-w-32"} location="contacts" />
                    </div>
                    <div className="md:w-1/2">
                        <BookingForm />
                    </div>
                </div>
            </section>
        </div >
    )
}
