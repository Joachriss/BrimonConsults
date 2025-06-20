import { motion } from "motion/react"
import { Btn } from "./buttons/Btn"
import { TeamCard } from "./cards/TeamCard"
import team from '../data/team.json'

export const TeamSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900"
        >
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                <h2 className="text-5xl w-full text-center mb-6 font-extrabold dark:text-white text-[#194a68]">
                    Our Team
                </h2>
                <p className="mb-10 font-light lg:text-xl text-center">
                    Meet our dedicated team of professionals at Brimon Consults
                </p>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
                    {
                        team.slice(0, 2).map((member, index) => (
                            <TeamCard key={index} member={member} description="" />
                        ))
                    }
                    <div className="text-center md:text-left col-span-full sm:col-span-1 bg-[#194a68] dark:bg-purple-500 text-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-[#FFF]">
                            Our Dedicated <span className="text-[#d94a68]">Team</span>
                        </h3>
                        <p className="mb-10 text-[#fff] mt-6">
                            We are committed to delivering innovative solutions that meet the unique needs of each project while ensuring sustainability and community engagement
                        </p>
                        <div className="mt-auto text-lg">
                            <a
                                href="#"
                                className="inline-flex items-center font-semibold text-[#db8f6c] hover:text-[#dd5e23] dark:text-[#dd5e23] dark:hover:text-[#dd5e23] hover:underline"
                            >
                                More
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-full w-full flex justify-center mt-6">
                        <Btn name="Meet Our Team" w='md:min-w-40' location="team"/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
