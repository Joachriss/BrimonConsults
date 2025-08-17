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

export const Faqs = () => {
    const [isAddFAQOpen, setIsAddFAQOpen] = useState(false);
    const [selectedFaq,setSelectedFaq]=useState<IFaq>()
    const { isLoading, faqs,refetch } = useFaqs();

    // Function to handle the deletion of a FAQ
    const deleteFaqMutation = useMutation({
        mutationKey: ["deleteFaqMutation"],
        mutationFn: (id: string) => archiveFaq(id),
        onSuccess: (data: any) => {
            toast.success(data.message || "FAQ deleted successfully");
            refetch();
        },
        onError: (error: any) => {
            toast.error(error.response.data.error || "Failed to delete FAQ");
        }
    });
    const onDeleteFaq = (id: string) => {
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
                    onClick={() => setIsAddFAQOpen(true)}
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
                                <button className="p-1 rounded-xl cursor-pointer text-red-600 hover:bg-red-200" onClick={() => onDeleteFaq(faq.id as string)}><IoMdTrash size={20} /></button>
                            </div>
                        )
                    }
                }
            />

            {/* Add project modal */}
            <AddQnModal refetch={refetch} selectedFaq={selectedFaq} isOpen={isAddFAQOpen} setIsOpen={setIsAddFAQOpen} />
        </section>
    )
}
