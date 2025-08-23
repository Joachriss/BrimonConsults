import { motion } from "framer-motion";
import { useState } from "react";
import TeamDialog from "../dialogs/TeamDialog";
import user from "/user.webp";
import { socialMediaIcons } from "../../pages/userPages/TeamPage";

export const TeamCard = ({ member, show }: { member: any; show: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <motion.div
        //   initial={{ opacity: 0, y: 30 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.4 }}
        //   className="flex-shrink-0"
        // >
        //   <div className="relative w-72 h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
        //     {/* Image */}
        //     <div
        //       className="relative w-full h-56 overflow-hidden cursor-pointer"
        //       onClick={() => setIsOpen(true)}
        //     >
        //       <img
        //         src={member.image === "" ? user : `/our_team/${member.image}`}
        //         alt={member.name}
        //         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        //       />
        //     </div>

        //     {/* Content */}
        //     <div className="p-4 space-y-2 text-center">
        //       <h3 className="text-lg font-bold text-[#194062] dark:text-white">{member.name}</h3>
        //       <p className="text-sm italic text-[#d94766] dark:text-gray-300">"{member.title}"</p>
        //       {show && (
        //         <div className="text-sm text-gray-700 dark:text-gray-300 text-left space-y-2 mt-2">
        //           <p>{member.description}</p>

        //           {member.credentials?.length > 0 && (
        //             <div>
        //               <h4 className="font-bold text-[#194062]">Credentials</h4>
        //               <ul className="list-disc list-inside">
        //                 {member.credentials.map((cred: string, idx: number) => (
        //                   <li key={idx}>{cred}</li>
        //                 ))}
        //               </ul>
        //             </div>
        //           )}

        //           {member.expertise?.length > 0 && (
        //             <div>
        //               <h4 className="font-bold text-[#194062]">Expertise</h4>
        //               <ul className="list-disc list-inside">
        //                 {member.expertise.map((exp: string, idx: number) => (
        //                   <li key={idx}>{exp}</li>
        //                 ))}
        //               </ul>
        //             </div>
        //           )}
        //         </div>
        //       )}
        //     </div>

        //     {/* Social Icons */}
        //     <div className="flex justify-center gap-4 py-3 bg-white/20 dark:bg-gray-700/30 backdrop-blur-sm border-t border-gray-300 dark:border-gray-600">
        //       <a href={member.facebook || "#"} target="_blank" rel="noopener noreferrer">
        //         <FaFacebookF className="text-[#194062] hover:text-[#d94766] transition text-lg" />
        //       </a>
        //       <a href={member.twitter || "#"} target="_blank" rel="noopener noreferrer">
        //         <FaTwitter className="text-[#194062] hover:text-[#d94766] transition text-lg" />
        //       </a>
        //       <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer">
        //         <FaLinkedinIn className="text-[#194062] hover:text-[#d94766] transition text-lg" />
        //       </a>
        //     </div>
        //   </div>

        //   {/* Dialog */}
        //   <TeamDialog
        //     setIsServiceOpen={setIsOpen}
        //     isServiceOpen={isOpen}
        //     member={member}
        //   />
        // </motion.div>



        // DESIGN 02
        <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group h-full"
        >
            <div className="relative w-full h-full rounded-2xl bg-white dark:bg-gray-900 shadow-xl overflow-hidden flex flex-col items-center text-center p-4 space-y-4 transition-transform duration-300 hover:-translate-y-1">
                {/* Profile Image */}
                <div
                    className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setIsOpen(true)}
                >
                    <img
                        src={member.image === "" ? user : member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Basic Info */}
                <div>
                    <h3 className="text-lg font-bold text-[#194062] dark:text-white">{member.name}</h3>
                    <p className="text-sm italic text-[#d94766] dark:text-gray-300 mt-1">"{member.title}"</p>
                    <div className="flex justify-center mt-2 space-x-3 text-[#194062] dark:text-white">
                        {/* Social Media Icons */}
                        {member?.socialMedia
                            ?.filter((sm: any) => sm.link)
                            ?.map((sm: any, idx: number) => (
                                <a
                                    key={sm.name + idx}
                                    href={sm.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-gray-300 hover:border-[#184062] transition"
                                >
                                    {socialMediaIcons[sm.name]}
                                </a>
                            ))}


                    </div>
                </div>

                {/* Detailed Info */}
                {show && (
                    <div className="w-full text-left text-sm mt-4 space-y-3">
                        <p className="text-gray-700 dark:text-gray-300">{member.description}</p>

                        {member.credentials && member.credentials.length > 0 && (
                            <div>
                                <h4 className="font-bold text-[#194062] mt-2">Credentials</h4>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {member.credentials.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {member.expertise && member.expertise.length > 0 && (
                            <div>
                                <h4 className="font-bold text-[#194062] mt-2">Expertise</h4>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {member.expertise.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Dialog */}
            <TeamDialog
                setIsServiceOpen={setIsOpen}
                isServiceOpen={isOpen}
                member={member}
            />
        </motion.div>
    );
};
