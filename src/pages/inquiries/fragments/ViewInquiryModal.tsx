import { Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react"
import { Button } from "../../../components/buttons/Button";
import type { IInquiry } from "../../../types";

interface dialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    inquiry?:IInquiry;
}

export const ViewInquiryModal = ({isOpen, setIsOpen, inquiry}: dialogProps) => {
  return (
            <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={() => setIsOpen(false)}>
                <DialogBackdrop className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle className="font-bold text-2xl text-[#d94766]">{inquiry?.name}</DialogTitle><hr className='border-gray-400' />
                            <div className="mt-5 space-y-1">
                                <label className="flex flex-row items-center gap-4">
                                    <span className="font-bold text-sm">Email:</span>
                                    <p className="text-sm text-gray-500">{inquiry?.email}</p>
                                </label>
                                <label className="flex flex-row items-center gap-4">
                                    <span className="font-bold text-sm">Phone:</span>
                                    <p className="text-sm text-gray-500">{inquiry?.subject}</p>
                                </label>
                                <label >
                                    <span className="font-bold text-sm">Message</span>
                                    <p className="text-sm text-gray-500">{inquiry?.message}</p>
                                </label>
                            </div>
                            <div className="flex gap-4 w-full justify-end mt-5">
                                <button type="button" className='p-2 rounded-xl cursor-pointer bg-red-600 text-white' onClick={() => setIsOpen(false)}>Cancel</button>
                                <Button
                                    label="Submit"
                                    loading={false}
                                    onClick={() => {
                                        // Handle submit logic here
                                    }}
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
  )
}
