import { IoMdAdd, IoMdEye, IoMdTrash } from "react-icons/io"
import { Button } from "../../components/buttons/Button"
import { useState } from "react";
import { AddProjectModal } from "./fragments/AddProjectModal";
import { Table } from "../../components/table";
import { colums } from "./fragments/Columns";
import { useProjects } from "../../hooks/useProjects";
import type { TProject } from "../../types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { archiveProject } from "../../services/projectServices";



export const Projects = () => {
    const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
    const { isLoading, projects, refetch } = useProjects();
    const [selectedProject, setSelectedProject] = useState<TProject>()

    const deleteProjectMutation = useMutation({
        mutationKey: ["deleteProjectMutation"],
        mutationFn: (id: string) => archiveProject(id),
        onSuccess: (data: any) => {
            toast.success(data.message || "Project deleted successfully");
            refetch();
        },
        onError: (error: any) => {
            toast.error(error.response.data.error || "Failed to delete project");
        }
    });

    const onDeleteProject = (id: string) => {
        deleteProjectMutation.mutate(id);
    }

    return (
        <section className="flex flex-col p-3 space-y-3">
            <div className="text-2xl font-bold my-7 flex items-center justify-between">
                <h1>Projects</h1>
                <Button
                    label="Add Project"
                    icon={<IoMdAdd />}
                    loading={isLoading}
                    onClick={() => setIsAddProjectOpen(true)}
                />
            </div>

            <Table
                columns={colums}
                data={projects}
                hasActions={true}
                hasSelection={false}
                isLoading={false}
                actions={
                    (data: TProject) => {
                        return (
                            <div className="flex flex-row">
                                <button className="p-1 rounded-xl cursor-pointer text-pink-600 hover:bg-pink-200" onClick={() => { setSelectedProject(data); setIsAddProjectOpen(true) }}><IoMdEye size={20} /></button>
                                <button className="p-1 rounded-xl cursor-pointer text-red-600 hover:bg-red-200" onClick={() => onDeleteProject(data.id as string)}><IoMdTrash size={20} /></button>
                            </div>
                        )
                    }
                }
            />

            {/* Add project modal */}
            <AddProjectModal refetch={refetch} project={selectedProject} isOpen={isAddProjectOpen} setIsOpen={setIsAddProjectOpen} />
        </section >
    )
}
