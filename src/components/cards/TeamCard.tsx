import { motion } from 'motion/react';
import user from '/user.png';
import { useState } from 'react';
import TeamDialog from '../dialogs/TeamDialog';
export const TeamCard = ({ member, show }: { member: any, show: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            className='group duration-300'
        >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md text-center flex h-full flex-col items-center gap-3">
                <div className="overflow-hidden w-full h-70 ">
                    <img onClick={() => setIsOpen(true)} src={member.image === '' ? user : `/our_team/${member.image}`} className="object-cover w-full h-full" alt="Team Member" />
                </div>
                <div className='space-y-2 p-4'>
                    <h3 className="text-xl font-semibold text-[#194062] dark:text-purple-400">{member.name}</h3>
                    <hr className='w-12 border-2 border-[#194062] mx-auto' />
                    <p className="text-sm italic group-hover:font-bold duration-300  mb-5 text-[#d94766] dark:text-gray-300">"{member.title}"</p>
                    {
                        show ? (
                            <>
                                <p className="text-start ">{member.description}</p>

                                <div className="text-start font-bold mt-2 text-gray-800">Credentials</div>
                                <ul className="text-start disk list-disc ms-6">
                                    {
                                        member.credentials.map((credential: any, index: number) => (
                                            <li key={index}>{credential}</li>
                                        ))
                                    }
                                </ul>
                                <div className="text-start font-bold mt-2 text-gray-800">Expertise</div>
                                <ul className="text-start disk list-disc ms-6">
                                    {
                                        member.expertise.map((credential: any, index: number) => (
                                            <li key={index}>{credential}</li>
                                        ))
                                    }
                                </ul>
                            </>
                        ) : ""
                    }
                </div>
            </div>
            <TeamDialog setIsServiceOpen={setIsOpen} isServiceOpen={isOpen} member={member}/>
        </motion.div>
    )
}
