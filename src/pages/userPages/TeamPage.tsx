import { motion } from "motion/react"
import { PageHeader } from "../../components/PageHeader"
import { FaAward, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaQuoteLeft, FaStar, FaTwitter } from "react-icons/fa"
import { useEffect, type JSX, type Key } from "react"
import { pageTitle } from "../../utils/pageTitle"
import { useStaffs } from "../../hooks/useStaffs"
import type { TUser } from "../../types"
import { LuLoader } from "react-icons/lu"
import { MdSearchOff, MdWorkOutline } from "react-icons/md"
import user from "/user.webp"
import { Link } from "react-router"
import { TeamCard } from "../../components/cards/TeamCard"

export const socialMediaIcons: Record<string, JSX.Element> = {
    LINKEDIN: <FaLinkedinIn className="hover:text-[#184062] transition" />,
    FACEBOOK: <FaFacebookF className="hover:text-[#184062] transition" />,
    TWITTER: <FaTwitter className="hover:text-[#184062] transition" />,
    INSTAGRAM: <FaInstagram className="hover:text-[#184062] transition" />
};

// directors
    export const directorNames = [
        "Otty Msuku",
        "Bennet Katabarwa",
        "Gregory Feist",
        "Abdulrahim Kassongo"
    ];

export const TeamPage = ({ title }: { title: string }) => {
    pageTitle(title)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const { staffs, isLoading } = useStaffs();
    const teamList = staffs?.results || [];

    

    return (
        <section className="w-full">
            <PageHeader recall="Meet Our Team" services={["Leadership", "Management", "Team Work"]} pageName="Our Team" image="bg-[url('/projects100/Commercial-Complex-Goba-Dar-es-Salaam/image3.webp')]" />
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
                                <section
                                    key={manager.id}
                                    className="max-w-screen-xl my-16 mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-1 gap-12 items-center relative"
                                >
                                    <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">

                                        {/* Image */}
                                        <div className="w-full lg:w-1/3 relative flex-shrink-0">
                                            <img
                                                src={manager.image ? (manager.image as string) : user}
                                                alt={manager.name}
                                                className="rounded-2xl shadow-lg object-cover w-full h-[70%] lg:h-full lg:max-h-[500px] lg:translate-y-0 group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Optional decorative overlay */}
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 rounded-2xl pointer-events-none" />
                                        </div>

                                        {/* Text Section */}
                                        <div className="flex-1 flex flex-col gap-4">
                                            <h1 className="text-4xl font-extrabold text-[#194a68]">{manager.name}</h1>
                                            <p className="text-xl font-semibold text-[#d94a68] flex items-center gap-2">
                                                <MdWorkOutline className="text-2xl" />
                                                {manager.title}
                                            </p>
                                            <p className="text-sm text-gray-500">Brimon Consults</p>

                                            <div className="h-[3px] w-24 bg-gradient-to-r from-[#d94a68] to-[#194a68] mt-4 mb-4 rounded"></div>

                                            <div className="text-gray-700 space-y-4 text-base text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: manager.description }}></div>

                                            {/* Credentials & Expertise */}
                                            <div className="flex flex-col lg:flex-row gap-8 mt-4">
                                                {manager.credentials?.length > 0 && (
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                                                            <FaAward className="text-[#d94a68]" /> Credentials
                                                        </h3>
                                                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                                            {manager.credentials.map((cred: string, idx: number) => (
                                                                <li key={idx}>{cred}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {manager.expertises?.length > 0 && (
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                                                            <FaStar className="text-[#194a68]" /> Expertise
                                                        </h3>
                                                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                                            {manager.expertises.map((exp: string, idx: number) => (
                                                                <li key={idx}>{exp}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Socials */}
                                            <div className="flex gap-3 mt-4">
                                                {/* Socials */}
                                                {/* <div className="flex gap-4 mt-6 relative z-10"> */}
                                                {manager?.socialMedia
                                                    ?.filter((sm: any) => sm.link)
                                                    ?.map((sm: any, idx: number) => (
                                                        <a
                                                            key={sm.name + idx}
                                                            href={sm.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-3 rounded-full border border-gray-300 hover:border-[#194a68] hover:bg-[#194a68]/10 transition shadow-sm"
                                                        >
                                                            {socialMediaIcons[sm.name] || <FaEnvelope />}
                                                        </a>
                                                    ))}
                                                {/* </div> */}
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex flex-wrap gap-4 mt-6">
                                                <Link
                                                    to="/team"
                                                    className="inline-block bg-[#d94a68] hover:bg-[#194a68] transition-all duration-300 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl"
                                                >
                                                    Get In Touch
                                                </Link>
                                                <a
                                                    href="/docs/Brimon_Consults_Company_Profile.pdf"
                                                    download
                                                    className="inline-block bg-[#194a68] hover:bg-[#d94a68] transition-all duration-300 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl"
                                                >
                                                    Download Profile
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>


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
                        {/* <CardCarousel team={teamList.filter((m: TUser) => m.role !== "MANAGER")} /> */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 items-center justify-center">
                            <div className="col-span-full text-xl">
                                Board of directors
                            </div>


                            {directorNames.map((name) => {
                                const member = teamList.find((m: TUser) => m.name === name);

                                if (!member) return null; // skip if not found

                                return (
                                    <div
                                        key={member.id}
                                        className="w-full h-full flex-shrink-0 snap-start"
                                    >
                                        <TeamCard member={member} show={false} />
                                    </div>
                                );
                            })}



                            <div className="col-span-full mt-10 text-xl">
                                Associates
                            </div>
                            <div className="col-span-full grid w-full sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
                                {teamList.filter((m: TUser) => m.role !== "MANAGER" && !['Business Development Director', "Technical Director", "Contracts & Commercial Director", "Operations & Construction Director/Manager"].includes(m.title) && m.role !== "ADMINISTRATOR")?.map((member: TUser, i: Key) => (
                                    <div
                                        key={i}
                                        className="w-full h-full  flex-shrink-0 snap-start"
                                    >
                                        <TeamCard member={member} show={false} />
                                    </div>
                                ))}

                            </div>
                        </div>
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
