import {  Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaSpinner } from 'react-icons/fa'
type Props = {
    action: "delete" | "edit"
    description: string
    isOpen: boolean
    loading: boolean
    onClose: () => void
    actionFn: () => void
}
const ConfirmationDialog = ({ action , description,loading, onClose, isOpen,actionFn }:Props) => {

    return (
        <Dialog open={isOpen} as="div" className="relative z-60 focus:outline-none" onClose={onClose}>
            <DialogBackdrop className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle className="font-bold text-2xl text-[#d94766]">{action === "delete" ? "Delete an item?" : "Edit an item"}</DialogTitle><hr className='border-gray-400' />
                        <Description className="mt-2 text-lg text-[#194062] dark:text-gray-400">{description}</Description>
                        {/* <p className="mt-2 text-gray-600 dark:text-gray-300"> {description}</p> */}
                        
                        <div className="flex gap-4 w-full justify-end mt-5">
                            <button className='p-2 rounded-xl cursor-pointer bg-[#194062] text-white' onClick={() =>onClose()}>close</button>
                            <button className='p-2 rounded-xl cursor-pointer bg-red-500 text-white' onClick={() => actionFn()}>{loading ? <FaSpinner className='animate-spin duration-300' /> : action === "delete" ? "Delete" : "Edit"}</button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ConfirmationDialog
