import { IoMdAdd, IoMdTrash } from "react-icons/io"
import { BiSolidUserDetail } from "react-icons/bi";
import { Button } from "../../components/buttons/Button"
import { useState } from "react";
import { AddStaffModal } from "./fragments/AddStaffModal";
import { Table } from "../../components/table";
import { colums } from "./fragments/Columns";
import { useStaffs } from "../../hooks/useStaffs";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { archiveUser } from "../../services/userServices";
import type { TUser } from "../../types";



export const Staffs = () => {
    const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
    const { isLoading, staffs,refetch } = useStaffs();
    const [selectedStaff, setSelectedStaff] = useState<TUser>()

    const deleteUserMutation = useMutation({
        mutationKey: ["deleteUserMutation"],
        mutationFn: (id: string) => archiveUser(id),
        onSuccess: (data: any) => {
            toast.success(data.message || "Staff deleted successfully");
            refetch();
        },
        onError: (error: any) => {
            toast.error(error.response.data.error || "Failed to delete staff");
        }
    });

    const onDeleteUser = (id: string) => {
        deleteUserMutation.mutate(id);
    }
    return (
        <section className="flex flex-col p-3 space-y-3">
            <div className="text-2xl font-bold my-7 flex items-center justify-between">
                <h1>Staffs</h1>
                <Button
                    label="Add Staff"
                    icon={<IoMdAdd />}
                    loading={isLoading}
                    onClick={() => setIsAddProjectOpen(true)}
                />
            </div>

            <Table
                columns={colums}
                data={staffs}
                hasActions={true}
                hasSelection={false}
                isLoading={false}
                actions={
                    (data: TUser) => {
                        return (
                            <div className="flex flex-row">
                                <button className="p-1 rounded-xl cursor-pointer text-pink-600 hover:bg-pink-200" onClick={() => { setSelectedStaff(data); setIsAddProjectOpen(true) }}><BiSolidUserDetail  size={25} /></button>
                                <button className="p-1 rounded-xl cursor-pointer text-red-600 hover:bg-red-200" onClick={() => onDeleteUser(data.id as string)}><IoMdTrash size={20} /></button>
                            </div>
                        )
                    }
                }
            />

            {/* Add project modal */}
            <AddStaffModal refetch={refetch} user={selectedStaff} isOpen={isAddProjectOpen} setIsOpen={setIsAddProjectOpen} />
        </section>
    )
}
