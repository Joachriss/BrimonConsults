import { motion } from "motion/react"
import { PageHeader } from "../components/PageHeader"
import team from "../data/team.json"
import { TeamCard } from "../components/cards/TeamCard"
import { FaQuoteLeft } from "react-icons/fa"

export const TeamPage = () => {
    return (
        <section className="w-full">
            <PageHeader recall="Meet Our Team" services={["Leadership", "Management", "Team Work"]} pageName="Our Team" image="bg-[url('/projects100/Commercial-Complex-Goba-Dar-es-Salaam/image2.webp')]" />
            <div className="max-w-screen-xl overflow-hidden mx-auto px-4 py-8 border-s-8 border-[#d94a68] dark:border-[#d94a68]">
                <h1 className="md:text-5xl text-3xl text-[#194062] dark:text-white mb-4">Meet Our <span className="text-[#d94a68]">Team</span></h1>
                <motion.p
                    initial={{ x: -1300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 dark:text-gray-400"
                >
                    Our team is comprised of associates spanning various disciplines such as planning, design, engineering, contracts,
                    procurement, and program and construction management, offering comprehensive services across urban develop
                    ment, industrial and mining, transportation, infrastructure, water, renewable energy, and environmental initiatives.
                    Throughout the project lifecycle, we work collaboratively with a shared goal of contributing to a better world
                </motion.p>


            </div>

            <div className="max-w-screen-xl overflow-hidden mx-auto px-4 py-8">
                <h1 className="md:text-4xl text-3xl text-[#194062] dark:text-white mb-8">Our Team Members</h1>
                <div className="px-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        team.map((member, index) => (
                            <TeamCard key={index} member={member} description={member.description} />
                        ))
                    }
                </div>
            </div>

            <div className="w-full my-5 bg-[url('/construction.webp')] dark:bg-[#d94a68] bg-cover bg-center bg-fixed">
                <div className="w-full h-fit bg-black/70 justify-center text-center gap-x-4 overflow-hidden mx-auto px-4 md:px-42 py-18 md:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex mx-auto flex-row gap-x-4 gap-y-2">
                            <FaQuoteLeft size={45} className='text-[#d94a68]' />
                            {/* <h1 className="text-4xl  text-white">Our Vision</h1> */}
                        </div>
                        <p className='md:text-3xl text-xl text-white'>
                            We uphold directness,
                            transparency, and
                            honesty in all our
                            actions
                        </p>
                        <p className="text-sm text-white">
                            Our team thrives on collaboration, innovation, and
                            a shared passion for excellence. Together, we’re
                            turning visions into realities.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Join our team */}
            <div className="max-w-screen-xl overflow-hidden mx-auto px-4 py-8">
                <h1 className="md:text-5xl text-3xl text-[#194062] dark:text-white mb-4">JOIN OUR <span className="text-[#d94a68]">DREAMTEAM</span></h1>
                <motion.p
                    initial={{ x: -1300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-lg md:px-2 text-gray-600 dark:text-gray-400"
                >
                    Get a chance to join the Dream Team and experience
                    an exciting opportunity to collaborate with industry
                    veterans, each bringing unique expertise and a shared
                    passion for excellence. Together, we’ll drive innovation,
                    tackle challenges, and make significant contributions
                    to our field and beyond.
                </motion.p>
                <div className="md:text-2xl font-bold text-lg md:px-2 text-center">
                    <h4 className="text-[#194062] dark:text-white mt-4">Send your CV to us at</h4>
                    <h3 className="text-[#194062] dark:text-white mb-4">Email: <a href="mailto:careers@brimonconsults.com" className="text-[#d94a68]">careers@brimonconsults.com</a></h3>

                </div>
            </div>
        </section>
    )
}
