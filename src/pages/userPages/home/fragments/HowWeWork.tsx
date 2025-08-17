import { motion } from "motion/react"
import project from "/icons/project.svg"
import architecture from "/icons/architecture.svg"
import implementation from "/icons/implementation.svg"

export const HowWeWork = () => {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                <div className="max-w-screen-lg mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold tracking-tight text-[#194062] dark:text-white sm:text-5xl"
                    >
                        How We Work
                    </motion.h2>
                    <p className="mt-4 sm:px- text-lg text-gray-500 dark:text-gray-400">
                        We take pride in assembling teams of seasoned professionals with substantial real-world experience in construction management. Our
                        personnel are driven by a commitment to continuous learning, leadership, and problem-solving, striving for both personal and professional
                        growth. We prioritize a thorough understanding of project complexities, leveraging diverse perspectives and knowledge sources to find tailored
                        solutions.
                    </p>
                </div>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                    <div className="text-center h-full border-b-4 border-[#194a68] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900 h-full"
                        >
                            {/* <div className="text-7xl text-[#d94766] font-bold">1</div> */}
                            <div className="mb-5 w-full">
                                <img src={architecture} alt="Project Icon" className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">ANALYSIS & PLANNING</h3>
                            <p className="mt-2 text-black">
                                Define project scope, assess feasibility, analyze
                                risks, engage stakeholders, conduct site analysis,
                                and develop conceptual designs.
                            </p>
                        </motion.div>
                    </div>
                    <div className="text-center h-full  border-b-4 border-[#194a68] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                            className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900 h-full"
                        >
                            {/* <div className="text-7xl text-[#d94766] font-bold">2</div> */}
                            <div className="mb-5 w-full">
                                <img src={implementation} alt="Project Icon" className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">IMPLEMENTATION</h3>
                            <p className="mt-2 text-black">
                                Translate designs into detailed plans, procure
                                materials, execute construction, manage
                                risks, and ensure quality control throughout
                                execution.
                            </p>
                        </motion.div>
                    </div>
                    <div className="text-center h-full  border-b-4 border-[#194a68] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.8  }}
                            className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900 h-full"
                        >
                            {/* <div className="text-7xl text-[#d94766] font-bold">3</div> */}
                            <div className="mb-5 w-full">
                                <img src={project} alt="Project Icon" className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">MONITORING & EVALUATION</h3>
                            <p className="mt-2 text-black">
                                Monitor progress by ensuring Progress
                                Tracking, Quality Assurance/ Quality Control,
                                Cost Management, Risk Management,
                                Communications and Reporting and potentially
                                stakeholder engagement as needed.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
