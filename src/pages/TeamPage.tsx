import { motion } from "motion/react"
import { PageHeader } from "../components/PageHeader"
import team from "../data/team.json"
import { TeamCard } from "../components/cards/TeamCard"
import { FaQuoteLeft } from "react-icons/fa"
import { useEffect } from "react"

export const TeamPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
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

            {
                team.slice(0, 1).map((member, index) => (
                    <div key={index} className="max-w-screen-xl my-10 grid grid-cols-1 md:grid-cols-2 gap-3 items-center min-h-[50vh] mx-auto">
                        <div id="profile" className="w-full rounded-lg order-2 lg:rounded-l-lg h-full lg:rounded-r-none bg- opacity-75 mx-2 lg:mx-0">
                            <div className="p-4 md:p-12 text-center lg:text-left">

                                <h1 className="text-3xl text-[#194a68] font-bold pt-8 lg:pt-0">{member.name}</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-[#d94a68] opacity-25"></div>
                                <p className="pt-4 text-lg font-bold flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-[#d94a68] pr-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                    </svg> {member.title}
                                </p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <svg className="h-4 fill-current text-[#d94a68] pr-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                    </svg> Brimon consults
                                </p>
                                <p className="pt-8 text-lg">{member.description}</p>
                                <div className="text-xl mt-2 text-gray-800">Credentials</div>
                                <ul className="disk list-disc ms-6">
                                    {
                                        member.credentials.map((credential: any, index: number) => (
                                            <li key={index} className="text-lg">{credential}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>


                        <div className="w-full h-full order-1 ">
                            <img src={`/our_team/${member.image}`} className="rounded-lg  object-cover w-full h-full" />

                        </div>


                    </div>
                ))
            }

            <div className="max-w-screen-xl overflow-hidden mx-auto px-4 py-8">
                <h1 className="md:text-4xl text-3xl text-[#194062] dark:text-white mb-8">Our Members</h1>
                <div className="px-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        team.slice(1, team.length).map((member, index) => (
                            <TeamCard key={index} member={member} show={false} />
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
