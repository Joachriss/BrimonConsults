import { motion } from 'motion/react';
import user from '/user.png';
export const TeamCard = ({member, description}: {member: any,description: string}) => {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1}}
            className='group duration-300'
        >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md text-center flex h-full flex-col items-center gap-3">
                <div className="overflow-hidden w-full h-60 ">
                    <img src={member.image === '' ? user : `/our_team/${member.image}`} className="object-cover w-full h-full" alt="Team Member" />
                </div>
                <div className='space-y-2 p-4'>
                    <h3 className="text-xl font-semibold text-[#194062] dark:text-purple-400">{member.name}</h3>
                    <hr className='w-12 border-2 border-[#194062] mx-auto'/>
                    <p className="text-sm italic group-hover:font-bold duration-300  mb-5 text-[#d94766] dark:text-gray-300">"{member.title}"</p>
                    <p className="text-start text-gray-600 dark:text-gray-300">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}
