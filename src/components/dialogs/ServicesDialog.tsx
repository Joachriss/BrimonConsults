import {  Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const ServicesDialog = (props: any) => {
    const { service, isServiceOpen, setIsServiceOpen } = props

    return (
        <Dialog open={isServiceOpen} as="div" className="relative z-50 focus:outline-none" onClose={() => setIsServiceOpen(false)}>
            <DialogBackdrop className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-5xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle className="font-bold text-2xl text-[#d94766]">{service?.title}</DialogTitle><hr className='border-gray-400' />
                        {/* <Description className="mt-2 font-bold text-lg text-[#194062] dark:text-gray-400">{service.subject}</Description> */}
                        <div className="mt-2 text-gray-600 dark:text-gray-300 space-y-4 text-justify" dangerouslySetInnerHTML={{ __html: service?.description }}></div>
                        <ul className="text-start disk list-disc ms-6">
                            {
                                service?.details && service?.details.map((benefit: any, index: number) => (
                                    <li key={index} className="mt-2 text-gray-600 dark:text-gray-300">{benefit}</li>
                                ))
                            }
                        </ul>
                        {/* <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p> */}
                        <div className="flex gap-4 w-full justify-end mt-5">
                            <button className='p-2 rounded-xl cursor-pointer bg-[#d94766] text-white' onClick={() => setIsServiceOpen(false)}>close</button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ServicesDialog
