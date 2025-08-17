import { motion } from "motion/react"
import { PageHeader } from "../../components/PageHeader"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaQuoteLeft, FaTwitter } from "react-icons/fa"
import { useEffect, type JSX } from "react"
import { CardCarousel } from "../../components/cards/SlidingCards"
import { pageTitle } from "../../utils/pageTitle"
import { useStaffs } from "../../hooks/useStaffs"
import type { TUser } from "../../types"
import { LuLoader } from "react-icons/lu"
import { MdSearchOff } from "react-icons/md"
import user from "/user.webp"
import { Link } from "react-router"

export const socialMediaIcons: Record<string, JSX.Element> = {
    LINKEDIN: <FaLinkedinIn className="hover:text-[#184062] transition" />,
    FACEBOOK: <FaFacebookF className="hover:text-[#184062] transition" />,
    TWITTER: <FaTwitter className="hover:text-[#184062] transition" />,
    INSTAGRAM: <FaInstagram className="hover:text-[#184062] transition" />
};

export const TeamPage = ({ title }: { title: string }) => {
    pageTitle(title)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const { staffs, isLoading } = useStaffs();
    const teamList = staffs?.results || [];
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
                isLoading ?
                    <div className="col-span-full flex items-center justify-center h-full w-full">
                        <LuLoader className="w-14 h-14 text-[#d94766] duration-300 animate-spin" />
                    </div>
                    : teamList.length > 0 ? (
                        (() => {
                            const manager = teamList.find((member: TUser) => member.role === "MANAGER");
                            return manager ? (
                                <div
                                    key={manager.id}
                                    className="max-w-screen-xl my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto px-4"
                                >
                                    {/* Text Section */}
                                    <div className="order-2 lg:order-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur rounded-2xl shadow-lg p-8">
                                        {/* Name */}
                                        <h1 className="text-4xl font-bold text-[#194a68]">{manager.name}</h1>
                                        <p className="mt-2 text-lg font-medium text-[#d94a68] flex items-center gap-2">
                                            {manager.title}
                                        </p>
                                        <p className="text-sm text-gray-500">Brimon Consults</p>

                                        {/* Divider */}
                                        <div className="h-[2px] w-20 bg-[#d94a68] mt-6 mb-4 rounded"></div>

                                        {/* Description */}
                                        <p className="text-gray-700 text-base leading-relaxed">{manager.description}</p>

                                        {/* Credentials */}
                                        {manager.credentials?.length > 0 && (
                                            <div className="mt-6">
                                                <h3 className="text-xl font-semibold text-gray-900">Credentials</h3>
                                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                                    {manager.credentials.map((credential: string, idx: number) => (
                                                        <li key={idx}>{credential}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Expertise */}
                                        {manager.expertises?.length > 0 && (
                                            <div className="mt-6">
                                                <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
                                                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                                    {manager.expertises.map((exp: string, idx: number) => (
                                                        <li key={idx}>{exp}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Socials */}
                                        <div className="flex gap-3 mt-6">
                                            {manager?.socialMedia
                                                ?.filter((sm: any) => sm.link)
                                                ?.map((sm: any, idx: number) => (
                                                    <a
                                                        key={sm.name + idx}
                                                        href={sm.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-full border border-gray-300 hover:border-[#194a68] hover:bg-[#194a68]/10 transition"
                                                    >
                                                        {socialMediaIcons[sm.name]}
                                                    </a>
                                                ))}
                                        </div>

                                        {/* Button */}
                                        <div className="mt-8">
                                            <Link
                                                to="team"
                                                className="inline-block bg-[#d94a68] hover:bg-[#194a68] transition text-white font-semibold py-2 px-6 rounded-full"
                                            >
                                                Get In Touch
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="order-1 lg:order-2 w-full h-full">
                                        <img
                                            src={manager.image ? (manager.image as string) : user}
                                            className="rounded-2xl shadow-md object-cover w-full h-[500px]"
                                        />
                                    </div>
                                </div>

                            ) : null;
                        })()
                    )
                        :
                        <div className="col-span-full flex flex-col items-center justify-center font-bold text-gray-400 text-2xl text-center h-full w-full">
                            <MdSearchOff className="w-14 h-14" /><br />
                            <p>No Member found.</p>
                        </div>
            }
            {
                (teamList.length > 0 && !isLoading) &&
                <div className="max-w-screen-xl overflow-hidden mx-auto px-4 py-8">
                    <h1 className="md:text-4xl text-3xl text-[#194062] dark:text-white mb-8">Our Team</h1>
                    <div className="my-10 w-full h-fit">
                        <CardCarousel team={teamList.filter((m: TUser) => m.role !== "MANAGER")} />
                    </div>
                </div>
            }

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
