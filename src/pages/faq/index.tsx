import { IoMdAdd, IoMdEye, IoMdTrash } from "react-icons/io"
import { Button } from "../../components/buttons/Button"
import { useState } from "react";
import { AddQnModal } from "./fragments/AddQnModal";
import { Table } from "../../components/table";
import { colums } from "./fragments/Columns";
import { useFaqs } from "../../hooks/useFaqs";
import type { IFaq } from "../../types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { archiveFaq } from "../../services/faqServices";
import ConfirmationDialog from "../../components/dialogs/ConfirmationDialog";

export const Faqs = () => {
    const [isAddFAQOpen, setIsAddFAQOpen] = useState(false);
    const [isDeleteFAQOpen, setIsDeleteFAQOpen] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState<IFaq | null>(null)
    const { isLoading, faqs, refetch } = useFaqs();

    // Function to handle the deletion of a FAQ
    const deleteFaqMutation = useMutation({
        mutationKey: ["deleteFaqMutation"],
        mutationFn: (id: string) => archiveFaq(id),
        onSuccess: (data: any) => {
            toast.success(data.message || "FAQ deleted successfully");
            setSelectedFaq(null);
            setIsDeleteFAQOpen(false); // 👈 close the delete modal properly
            refetch();
        },
        onError: (error: any) => {
            toast.error(error.response.data.error || "Failed to delete FAQ");
        }
    });
    const onDeleteFaq = (id: string) => {
        if(!selectedFaq)
        deleteFaqMutation.mutate(id);
    }
    return (
        <section className="flex flex-col p-3 space-y-3">
            <div className="text-2xl font-bold my-7 flex items-center justify-between">
                <h1>FAQs</h1>
                <Button
                    label="Add FAQ"
                    icon={<IoMdAdd />}
                    loading={isLoading}
                    onClick={() => {setSelectedFaq(null); setIsAddFAQOpen(true); }}
                />
            </div>

            <Table
                columns={colums}
                data={faqs}
                hasActions={true}
                hasSelection={false}
                isLoading={isLoading}
                actions={
                    (faq: IFaq) => {
                        return (
                            <div className="flex flex-row">
                                <button className="p-1 rounded-xl cursor-pointer text-pink-600 hover:bg-pink-200" onClick={() => { setSelectedFaq(faq); setIsAddFAQOpen(true) }}><IoMdEye size={20} /></button>
                                <button className="p-1 rounded-xl cursor-pointer text-red-600 hover:bg-red-200" onClick={() => { setSelectedFaq(faq); setIsDeleteFAQOpen(true) }}><IoMdTrash size={20} /></button>
                            </div>
                        )
                    }
                }
            />

            {/* Add project modal */}
            <AddQnModal refetch={refetch} selectedFaq={selectedFaq!} isOpen={isAddFAQOpen} onClose={() => { if(selectedFaq !== null){setSelectedFaq(null)};setIsAddFAQOpen(false);  }}  />

            {/* delete project modal */}
            <ConfirmationDialog
                action="delete" isOpen={isDeleteFAQOpen} actionFn={() => onDeleteFaq(selectedFaq?.id as string)}
                description={"Are you sure you want to delete this FAQ?. This action cannot be undone."}
                onClose={() => { setIsDeleteFAQOpen(false); setSelectedFaq(null) }}
                loading={deleteFaqMutation.isPending}
            />
        </section>
    )
}
