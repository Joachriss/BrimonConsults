import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import type { TUser } from '../../types'
import { socialMediaIcons } from '../../pages/userPages/TeamPage'
import { FaEnvelope } from 'react-icons/fa'
type TProps = {
    member: TUser
    isServiceOpen: boolean
    setIsServiceOpen: (isOpen: boolean) => void
}

const TeamDialog = ({ member, isServiceOpen, setIsServiceOpen }: TProps) => {

    return (
        <Dialog
            open={isServiceOpen}
            as="div"
            className="relative z-50"
            onClose={() => setIsServiceOpen(false)}
        >
            <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <div className="fixed inset-0 z-50 w-screen overflow-y-auto flex items-center justify-center px-4 py-8">
                <DialogPanel
                    className="w-full max-w-5xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl max-h-[90vh] overflow-auto  flex flex-col md:flex-row border border-gray-300 dark:border-gray-700 relative"
                >
                    {/* Image section */}
                    <div className="p-3 w-full md:w-[40%]  md:h-auto">
                        <img
                            src={member.image as string}
                            alt={member.name}
                            className="w-full h-full object-cover object-top rounded-l-2xl"
                        />
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setIsServiceOpen(false)}
                        className="absolute bg-red-400 text-white top-2 right-2 rounded-lg hover:bg-red-600"
                    >
                        <IoClose size={24} />
                    </button>

                    {/* Content section */}
                    <div className="w-full p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center  justify-between">
                            <div className="w-full">
                                <h2 className="text-2xl font-bold text-[#194062]">{member.name}</h2>
                                <p className="text-sm text-[#d94766] italic">{member.title}</p>

                                <hr className="my-3 border-[#194062] w-1/4" />

                            </div>
                            {/* Socials */}
                            <div className="flex gap-4 mt-2 mb-4 relative z-10">
                                {member?.socialMedia
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
                            </div>
                        </div>

                        <div className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed space-y-4 text-justify" dangerouslySetInnerHTML={{ __html: member.description }}></div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {member?.credentials?.length > 0 && (
                                <div className="mt-5">
                                    <h3 className="font-semibold text-[#194062] text-sm">Credentials</h3>
                                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm mt-1">
                                        {member.credentials.map((item: string, index: number) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {member?.expertises?.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="font-semibold text-[#194062] text-sm">Expertise</h3>
                                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm mt-1">
                                        {member.expertises.map((item: string, index: number) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>


                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setIsServiceOpen(false)}
                                className="px-4 py-2 bg-[#d94766] text-white rounded-lg hover:bg-[#b33753] transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default TeamDialog
