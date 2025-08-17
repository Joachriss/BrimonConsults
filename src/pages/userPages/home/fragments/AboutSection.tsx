import { motion } from "motion/react"
import { FaGear } from "react-icons/fa6"
import { Counter } from "./Counter"
import { Link } from "react-router"

export const AboutSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900"
        >
            <div
                className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                <div className="col-span-2 mb-8">
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-500">Trusted by many</p>
                    <h2 className="mt-3 mb-4 text-5xl font-extrabold tracking-tight text-[#194062] dark:text-white">
                        Who we are
                    </h2>
                    <motion.p
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-light text-gray-500 sm:text-xl dark:text-gray-400"
                    >
                        Brimon Consults Limited (BCL) is a construction consultancy firm with a dedicated team offering innovative project management solutions tailored to specific
                        needs. Our diverse expertise spans Industrial work and mining urban development, transportation, infrastructure, water, renewable energy, and environme
                        ntal initiatives. We prioritize collaboration and continuous learning, assembling seasoned professionals to navigate project complexities and deliver successf
                        ul outcomes
                    </motion.p>
                    <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        <div>
                            <Link to="company"
                                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                Read More
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                        <div>
                            <Link to="projects" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                View our Projects
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 space-y-8 md:grid sm:grid-cols-2 md:gap-12 md:space-y-0">
                    {/* Project Management */}
                    <div>
                        <svg className="w-10 h-10 mb-2 text-[#194062] md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white flex flex-row"><Counter total={30} />+ Projects</h3>
                        <p className="font-light text-gray-500 text-sm dark:text-gray-400">
                            Strategic oversight to ensure project success, on time and on budget.
                        </p>
                    </div>

                    {/* Architecture */}
                    <div>
                        <svg className="w-10 h-10 mb-2 text-[#194062] md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white flex flex-row"><Counter total={30} />+ Happy clients</h3>
                        <p className="font-light text-gray-500 text-sm dark:text-gray-400">
                            Thoughtful, sustainable designs built to inspire and endure.
                        </p>
                    </div>

                    {/* Quantity Surveying */}
                    <div>
                        <svg className="w-10 h-10 mb-2 text-[#194062] md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" />
                        </svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">Project Management</h3>
                        <p className="font-light text-gray-500 text-sm dark:text-gray-400">
                            Accurate cost estimates that ensure efficient use of resources.
                        </p>
                    </div>

                    {/* Sustainability */}
                    <div>
                        <FaGear className="w-10 h-10 mb-2 text-[#194062] md:w-12 md:h-12 dark:text-purple-500" />
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">Sustainability</h3>
                        <p className="font-light text-gray-500 text-sm dark:text-gray-400">
                            Eco-friendly solutions that benefit people, projects, and the planet.
                        </p>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}
