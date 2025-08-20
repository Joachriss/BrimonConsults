import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { Button } from "../../../components/buttons/Button";
import { MultipleImagesInput } from "../../../components/forms/MultipleImagesInput";
import { useMutation } from "@tanstack/react-query";
import { createProject, editProject } from "../../../services/projectServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TProject } from "../../../types";
import { useEffect } from "react";

interface dialogProps {
    isOpen: boolean;
    onClose: () => void;
    project?: TProject; // Define the type for project if available
    refetch: () => void; // Optional refetch function to refresh project list after creation or edit
}


const projectSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(3, "Name must be at least 3 characters long"),
    description: z.string().min(3, "Description must be at least 3 characters long"),
    images: z.array(z.union([z.file(), z.string()])).min(1, "At least one image is required").max(6,"Exceeded 6 images")
});


export const AddProjectModal = ({ project, isOpen, onClose,refetch }: dialogProps) => {
    const { register, control,reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            id: project ? project.id : undefined,
            title: "",
            description: "",
            images: []
        }
    });

    useEffect(() => {
        if (project) {
            // If project is provided, set the form values to the project
            reset({
                id: project.id,
                title: project.title,
                description: project.description,
                images: project.images as (string[] | File[]) || []
            });
        } else {
            // Reset form if no project is provided
            reset({
                id: '',
                title: "",
                description: "",
                images: []
            });
        }
    }, [project, reset]);

    const createProjectMutation = useMutation({
        mutationKey: ["createProjectMutation"],
        mutationFn: (data: any) => createProject(data),
        onSuccess: (data: any) => {
            toast.success(data.message);
            reset();
            if(refetch) refetch();
            onClose();
        },
        onError: (data: any) => {
            toast.error(data.response.data.error);
        }
    });

    const editProjectMutation = useMutation({
        mutationKey: ["editProjectMutation"],
        mutationFn: (data: any) => editProject(data),
        onSuccess: (data: any) => {
            toast.success(data.message);
            reset();
            if(refetch) refetch(); 
            onClose();
        },
        onError: (data: any) => {
            toast.error(data.response.data.error);
        }
    });

    const onSubmit = (data: any) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        if(project){
            formData.append("id", data.id);
            (data.images as (File | string)[]).forEach((image: File | string)=>{
                if(image instanceof File){
                    formData.append("images",image);
                }else{
                    formData.append("imageLinks",image);
                }
            });
        }else{
            (data.images as File[]).forEach((file: File) => {
                formData.append("images", file);
            });
        }

        if(project){
            editProjectMutation.mutate(formData);
        }else{
            createProjectMutation.mutate(formData);
        }
    }

    return (
        <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={() => onClose()}>
            <DialogBackdrop className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle className="font-bold text-2xl text-[#d94766]">Add Project</DialogTitle><hr className='border-gray-400' />
                        <div className="mt-5 space-y-4">
                            <label >
                                <span className="font-bold text-sm">Project title</span>
                                <input
                                    type="text"
                                    {...register("title", { required: "Project title is required." })}
                                    placeholder="title"
                                    className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
                                />
                                <div className="text-red-600 text-s">{errors.title?.message}</div>
                            </label>
                            <label>
                                <span className="font-bold text-sm">Description</span>
                                <input
                                    type="text"
                                    {...register("description", { required: "Project description is required" })}
                                    placeholder="Description"
                                    className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
                                />
                                <div className="text-red-600 text-s">{errors.description?.message}</div>
                            </label>
                        </div>
                        <h1 className="mt-2 font-bold text-sm">Upload the images</h1>

                        {/* images input */}
                        <MultipleImagesInput isMultiple={true} name="images" control={control} />
                        <div className="text-red-600 text-s">{errors.images?.message}</div>


                        <div className="flex gap-4 w-full justify-end mt-5">
                            <button type="button" className='p-2 rounded-xl cursor-pointer bg-red-600 text-white' onClick={() => onClose()}>Cancel</button>
                            <Button
                                type="submit"
                                label="Submit"
                                loading={createProjectMutation.isPending}
                            />
                        </div>
                    </DialogPanel>
                </form>
            </div>
        </Dialog>
    )
}
