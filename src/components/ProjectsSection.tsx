import { motion } from 'motion/react';
import projects from '../data/projects.json';
import { Btn } from './buttons/Btn';
import cvvv from "/projects100/Medeli-Conventioanl-Centre-Dodoma/image1.webp"
import { ProjectCard } from './cards/ProjectCard';
import { Link } from 'react-router';
export const ProjectsSection = () => {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:pb-10 lg:px-6">

                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-[#194062] dark:text-white">
                            Our Projects
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Explore our portfolio of successful projects across construction, architecture, land development, and social risk management—each reflecting our commitment to excellence, innovation, and client satisfaction.
                        </p>

                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            role="list"
                            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                        >
                            {
                                projects.map((project) => (
                                    <Link to={`/projects100/${project.name}`} key={project.id} className="flex space-x-3 hover:underline">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-lg font-medium leading-tight text-gray-900 dark:text-white">{project.name}</span>
                                    </Link>
                                ))
                            }
                        </motion.ul>
                        <p className="mb-8 font-light lg:text-xl">
                            Our projects are a testament to our commitment to excellence, innovation, and client satisfaction.
                        </p>
                    </div>
                    <div className="hidden md:grid overflow-hidden grid-cols-5 gap-4">
                        <div className="col-span-2 h-52 overflow-hidden ">
                            {/* <img className="w-full h-full mb-4 rounded-lg object-cover" src={'/projects100/Commercial-Complex-Goba-Dar-es-Salaam/IMG_7542.webp'} alt="project image 1" /> */}
                        </div>
                        <motion.div 
                        initial={{ opacity: 0, x: "20%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-span-3 h-52 overflow-hidden">
                            <img className="w-full h-full mb-4 rounded-lg object-cover" src={cvvv} alt="project image 2" />
                        </motion.div>
                        <motion.div 
                        initial={{ opacity: 0, x: "20%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="col-span-3 h-52 overflow-hidden">
                            <img className="w-full h-full rounded-lg object-cover" src={"/projects100/Iyumbu/image6.webp"} alt="project image 3" />

                        </motion.div>
                        <div className="col-span-2 h-52 overflow-hidden">
                            {/* <img className="w-full h-full rounded-lg object-cover" src={'/projects100/Medeli-Conventioanl-Centre-Dodoma/WWWW_3-Photo.webp'} alt="project image 3" /> */}
                        </div>
                        <div className="col-span-full text-center mt-8 text-xl">
                            {/* <a
                                href="#"
                                className="inline-flex items-center font-semibold text-[#194062] hover:text-[#dd5e23] dark:text-[#dd5e23] dark:hover:text-[#dd5e23] hover:underline"
                            >
                                View More
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
                            </a> */}
                        </div>
                    </div>

                    <div className="col-span-full grid grid-cols-3 gap-4">
                        {
                            projects.slice(0,4).map((project,index) => (
                                <ProjectCard key={index} cols={project?.cols} project={project} />
                            ))
                        }

                    </div>
                    <div className="col-span-full mt-4 w-full flex justify-center">
                        <Btn name="View More" w='md:min-w-20' location={'projects'} />
                    </div>
                </div>

                {/* <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://demo.themesberg.com/landwind/images/feature-2.png" alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in
                                the world’s potential</h2>
                            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the
                                complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil,
                                and deploy changes with ease.</p>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Dynamic reports and dashboards</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Templates for everyone</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Limitless business automation</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of
                                traditional ITSM solutions.</p>
                        </div>
                </div> */}
            </div>
        </motion.section>
    )
}
