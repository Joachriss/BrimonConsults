import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { Button } from "../../../components/buttons/Button";
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import type { IFaq } from "../../../types";
import { createFaq, editFaq } from "../../../services/faqServices";
import toast from "react-hot-toast";
import { useEffect } from "react";

interface dialogProps {
    isOpen: boolean;
    onClose: () => void;
    selectedFaq?: IFaq;
    refetch: any
}

export const AddQnModal = ({ isOpen, onClose, selectedFaq, refetch }: dialogProps) => {
    // Initialize form with react-hook-form
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            question: "",
            answer: "",
            id: ""
        }
    })

    useEffect(() => {
        if (selectedFaq) {
            // If selectedFaq is provided, set the form values to the selected FAQ
            reset({
                question: selectedFaq.question,
                answer: selectedFaq.answer,
                id: selectedFaq.id
            });
        }else{
            reset({
                question: "",
                answer: "",
                id: ""
            });
        }
    }, [selectedFaq, reset]);

    // create
    const faqCreateMutation = useMutation({
        mutationKey: ["createFaq"],
        mutationFn: (data: IFaq) => createFaq(data),
        onSuccess: (data: any) => {
            onClose();
            reset();
            toast.success(data.message || "FAQ created successifully")
        },
        onError: (data: any) => {
            console.log(data)
            toast.error(data.response.data.error || "Failed to create FAQ")
        }
    })

    // edit
    const faqEditMutation = useMutation({
        mutationKey: ["editFaq"],
        mutationFn: (data: IFaq) => editFaq(data),
        onSuccess: (data: any) => {
            onClose();
            reset();
            toast.success(data.message || "FAQ edited successifully")
        },
        onError: (data: any) => {
            console.log(data)
            toast.error(data.response.data.error || "Failed to edit FAQ")
        }
    })


    const onSubmit = (data: IFaq) => {
        if(selectedFaq) {
            faqEditMutation.mutate(data);
        } else {
            faqCreateMutation.mutate(data)
        }
        reset();
        refetch();

    }
    return (
        <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={() => onClose()}>
            <DialogBackdrop className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle className="font-bold text-2xl text-[#d94766]">Add FAQ</DialogTitle><hr className='border-gray-400' />
                        <div className="mt-5 space-y-1">
                            <label >
                                <span className="font-bold text-sm">Question</span>
                                <input
                                    type="text"
                                    {...register("question", { required: "Question field is required" })}
                                    placeholder="Name"
                                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
                                />
                                <div className="text-red-600 mb-4 text-xs">{errors.question?.message}</div>
                            </label>
                            <label>
                                <span className="font-bold text-sm">Answer</span>
                                <textarea
                                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
                                    rows={4}
                                    {...register("answer", { required: "Answer field is required" })}
                                    id=""
                                >

                                </textarea>
                                <div className="text-red-600 mb-4 text-xs">{errors.answer?.message}</div>
                            </label>
                        </div>

                        <div className="flex gap-4 w-full justify-end mt-5">
                            <button type="button" className='p-2 rounded-xl cursor-pointer bg-red-600 text-white' onClick={() => onClose()}>Cancel</button>
                            <Button
                                type="submit"
                                label={selectedFaq ? "Edit" : "Submit"}
                                loading={faqCreateMutation.isPending || faqEditMutation.isPending}
                                onClick={
                                    handleSubmit(onSubmit)
                                }
                            />
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

