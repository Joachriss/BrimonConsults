import { useState } from "react";
import { ViewInquiryModal } from "./fragments/ViewInquiryModal";
import { Table } from "../../components/table";
import { columns } from "./fragments/Columns";
import { useInquiries } from "../../hooks/useInquiries";
import { BiSolidUserDetail } from "react-icons/bi";
import type { IInquiry } from "../../types";

export const Inquiries = () => {
    const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
    const [selectedInquiry,setSelectedInquiry]=useState<IInquiry>();
    const { isLoading, inquiries } = useInquiries()
    return (
        <section className="flex flex-col p-3 space-y-3">
            <div className="text-2xl font-bold my-7 flex items-center justify-between">
                <h1>Inquiries</h1>
            </div>

            <Table
                columns={columns}
                data={inquiries}
                hasActions={true}
                hasSelection={false}
                isLoading={isLoading}
                actions={
                    (data:IInquiry) => {
                        return (
                            <button className="p-2 rounded-xl cursor-pointer text-pink-600" onClick={() => {setSelectedInquiry(data);setIsAddProjectOpen(true);}}><BiSolidUserDetail  size={20}/></button>
                        )
                    }
                }
            />

            {/* Add project modal */}
            <ViewInquiryModal inquiry={selectedInquiry} isOpen={isAddProjectOpen} setIsOpen={setIsAddProjectOpen} />
        </section>
    )
}
