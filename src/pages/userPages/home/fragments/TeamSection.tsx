import { motion } from "motion/react"
import { Btn } from "../../../../components/buttons/Btn"
import { Link } from "react-router"
import { CardCarousel } from "../../../../components/cards/SlidingCards"
import { useStaffs } from "../../../../hooks/useStaffs"
import { LuLoader } from "react-icons/lu"
import { MdSearchOff } from "react-icons/md"
import type { TUser } from "../../../../types"
import user from "/user.webp"
import { socialMediaIcons } from "../../TeamPage"


export const TeamSection = () => {
    const { staffs, isLoading } = useStaffs();

    const teamList = staffs?.results || [];

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
                <div className="flex flex-col gap-8 text-gray-700 sm:gap-12 sm:grid-cols-3 dark:text-gray-400">
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
                                            key={manager.id} // make sure TUser has a unique id
                                            className="max-w-screen-xl my-10 grid grid-cols-1 md:grid-cols-2 gap-3 items-center min-h-[50vh] mx-auto"
                                        >
                                            <div
                                                id="profile"
                                                className="w-full rounded-lg order-2 lg:rounded-l-lg h-full lg:rounded-r-none opacity-75 mx-2 lg:mx-0"
                                            >
                                                <div className="p-4 md:p-12 text-left">
                                                    <h1 className="text-3xl text-[#194a68] font-bold pt-8 lg:pt-0">
                                                        {manager.name}
                                                    </h1>

                                                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-[#d94a68] opacity-25"></div>

                                                    <p className="pt-4 text-lg font-bold flex items-center justify-start">
                                                        <svg
                                                            className="h-4 fill-current text-[#d94a68] pr-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                                        </svg>{" "}
                                                        {manager.title}
                                                    </p>

                                                    <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-start">
                                                        <svg
                                                            className="h-4 fill-current text-[#d94a68] pr-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                                                        </svg>
                                                        Brimon consults
                                                    </p>

                                                    <p className="pt-8 text-lg">{manager.description}</p>

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

                                                    <div className="flex gap-4 mt-6">
                                                        {manager?.socialMedia
                                                            ?.filter((sm: any) => sm.link)
                                                            ?.map((sm: any, idx: number) => (
                                                                <a
                                                                    key={sm.name + idx}
                                                                    href={sm.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="p-2 hover:bg-blue-200 rounded-full border border-gray-300 hover:border-[#184062] transition"
                                                                >
                                                                    {socialMediaIcons[sm.name]}
                                                                </a>
                                                            ))}
                                                    </div>

                                                    <div className="pt-12 pb-8">
                                                        <Link
                                                            to="team"
                                                            className="bg-[#d94a68] hover:bg-[#194a68] text-white font-bold py-2 px-4 rounded-full"
                                                        >
                                                            Get In Touch
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full h-full order-1">
                                                <img
                                                    src={manager.image ? (manager.image as string) : user}
                                                    className="rounded-lg object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    ) : null;
                                })()
                            )
                                :
                                <div className="col-span-full flex flex-col items-center justify-center font-bold text-gray-400 text-2xl text-center h-full w-full">
                                    <MdSearchOff className="w-14 h-14" /><br />
                                    <p>No member found.</p>
                                </div>

                    }

                    {
                        (teamList?.length > 0 && !isLoading) && <>
                            <div>
                                <div className="text-4xl text-[#194a68] font-bold col-span-full">Our Expert Consultant</div>
                                <div className="text-sm text-[#194a68] mt-2 col-span-full">Our Expert Consultant</div>
                            </div>
                            <CardCarousel team={teamList?.slice(1)} />
                            <div className="col-span-full w-full flex justify-center mt-6">
                                <Btn name="Meet Our Team" w='md:min-w-40' location="team" />
                            </div>
                        </>
                    }
                </div>
            </div>
        </motion.section>
    )
}
