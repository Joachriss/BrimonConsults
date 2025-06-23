import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

const TeamDialog = (props: any) => {
    const { member, isServiceOpen, setIsServiceOpen } = props

    return (
        <Dialog open={isServiceOpen} as="div" className="relative z-70 focus:outline-none" onClose={() => setIsServiceOpen(false)}>
            <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="min-w-[80%] h-[85vh] overflow-y-auto max-w-md rounded-xl bg-white p-2 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        {/* <DialogTitle className="font-bold text-2xl text-[#d94766]">{member.title}</DialogTitle><hr className='border-gray-400' /> */}
                        <div className="grid grid-cols-1 h-[50%] items-start md:grid-cols-2 gap-4">
                            <div className="h-[550px] overflow-hidden w-full">
                                <img src={`/our_team/${member.image}`} alt="team member" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-center p-6">
                                <h1 className="text-2xl font-bold text-[#194062]">{member.name}</h1>
                                <div className="mt-2 text-lg text-[#194062] dark:text-gray-400">{member.description}</div>
                                <p className="text-lg text-[#194062]">{member.title}</p>
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
                                <div className="flex gap-4 w-full justify-end mt-5">
                                    <button className='p-2 rounded-xl cursor-pointer bg-[#d94766] text-white' onClick={() => setIsServiceOpen(false)}>close</button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default TeamDialog
