import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { Button } from "../../../components/buttons/Button";
import { MultipleImagesInput } from "../../../components/forms/MultipleImagesInput";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { StringArrayInput } from "../../../components/forms/StringArrayInput";
import { z } from "zod";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { addStaff, editUser } from "../../../services/userServices";
import { useEffect, type ReactElement } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import type { TUser } from "../../../types";

interface dialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    user?: TUser;
    refetch: () => void; // Optional refetch function to refresh staff list after creation or edit
}

const socialMediaList: TSocialMediaList[] = [
    {
        name: "LINKEDIN",
        icon: <FaLinkedin className="text-[#0077B5]" size={28} />,
    },
    {
        name: "FACEBOOK",
        icon: <FaFacebook className="text-[#1877F2]" size={28} />,
    },
    {
        name: "TWITTER",
        icon: <FaTwitter className="text-[#1DA1F2]" size={28} />,
    },
    {
        name: "INSTAGRAM",
        icon: <FaInstagram className="text-[#E1306C]" size={28} />,
    }

]

type TSocialMediaList = {
    name: string;
    icon: ReactElement;
}

const userSchema = z.object({
    id: z.string().optional(),
    role: z.string().optional(),
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.email(),
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z.string().min(3, "Description must be at least 3 characters long"),
    credentials: z.array(z.string()).min(1, "At least one credential is required"),
    expertises: z.array(z.string()).min(1, "At least one expertise is required"),
    socialMedia: z.array(z.object({
        name: z.string(),
        link: z
            .url()
            .optional()
            .or(z.literal(""))
    })).nullable(),
    image: z.union([
        z
            .instanceof(File)
            .refine(file => ["image/webp", "image/jpeg", "image/png"].includes(file.type), {
                message: "Only webp, jpeg and png images are allowed"
            })
            .refine(file => file.size <= 500_000, {
                message: "Image size must be less than 500kb"
            }),
        z.string()
    ]).optional()

})

export type TUserType = z.infer<typeof userSchema>

export const AddStaffModal = ({ isOpen, setIsOpen, refetch, user }: dialogProps) => {

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm<TUser>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            id: user ? user.id : undefined,
            name: "",
            title: "",
            description: "",
            credentials: [],
            expertises: [],
            socialMedia: socialMediaList.map((item) => ({ name: item.name, link: "" })),
            image: undefined
        }
    });

    useEffect(() => {
        if (user) {
            reset({
                id: user.id,
                name: user.name,
                title: user.title,
                email: user.email,
                description: user.description,
                credentials: user.credentials,
                expertises: user.expertises,
                socialMedia: user?.socialMedia?.some((media: any) => media.link !== "") ? user.socialMedia?.map((media: any) => ({ name: media.name, link: media.link })) : socialMediaList.map((item) => ({ name: item.name, link: "" })),
                image: user.image
            })
        }
    }, [user, reset]);

    const { fields } = useFieldArray({
        control,
        name: "socialMedia"
    });



    const createUserMutation = useMutation({
        mutationKey: ["projectMutation"],
        mutationFn: (data: any) => addStaff(data),
        onSuccess: (data: any) => {
            toast.success(data.message);
            reset();
            if (refetch) refetch(); // Call refetch if provided
            setIsOpen(false);
        },
        onError: (data: any) => {
            console.log(data);
            toast.error(data.response.data.error || "Failed to create project, please try again");
        }
    });

    const editUserMutation = useMutation({
        mutationKey: ["projectMutation"],
        mutationFn: (data: any) => editUser(data),
        onSuccess: (data: any) => {
            toast.success(data.message);
            reset();
            if (refetch) refetch(); // Call refetch if provided
            setIsOpen(false);
        },
        onError: (data: any) => {
            console.log(data);
            toast.error(data.response.data.error || "Failed to edit project, please try again");
        }
    })

    const onSubmit: SubmitHandler<TUser> = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        !user && formData.append("email", data.email);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("credentials", JSON.stringify(data.credentials));
        formData.append("expertises", JSON.stringify(data.expertises));
        formData.append("socialMedia", JSON.stringify(data.socialMedia));

        formData.append("image", data.image as File);

        if (user) {
            formData.append("id", user.id as string);
            editUserMutation.mutate(formData);
        } else {
            createUserMutation.mutate(formData);
        }
    }

    return (
        <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={() => setIsOpen(false)}>
            <DialogBackdrop className="fixed w-full h-full inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle className="font-bold text-2xl text-[#d94766]">Add Staff</DialogTitle><hr className='border-gray-400' />
                        <form onSubmit={handleSubmit(onSubmit)} id="staffForm">
                            <div className="mt-5 space-y-4">
                                <label >
                                    <span className="font-bold text-sm">Full name</span>
                                    <input
                                        type="text"
                                        {...register("name", { required: "full name is required." })}
                                        placeholder="Full name"
                                        className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
                                    />
                                    <div className="text-red-600 text-s">{errors.title?.message}</div>
                                </label>
                                <label >
                                    <span className="font-bold text-sm">Email</span>
                                    <input
                                        type="text"
                                        {...register("email")}
                                        placeholder="Email"
                                        className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
                                    />
                                    <div className="text-red-600 text-s">{errors.email?.message}</div>
                                </label>
                                <label >
                                    <span className="font-bold text-sm">Title</span>
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
                                    <textarea
                                        {...register("description", { required: "Description is required." })}
                                        className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none"
                                        placeholder="Description"
                                    >

                                    </textarea>
                                    <div className="text-red-600 text-s">{errors.description?.message}</div>
                                </label>
                                <div>
                                    <span className="font-bold text-sm">Credentials</span>
                                    <StringArrayInput control={control} name="credentials" />
                                    <div className="text-red-600 text-s">{errors.credentials?.message}</div>

                                </div>
                                <div>
                                    <span className="font-bold text-sm">Expertises</span>
                                    <StringArrayInput control={control} name="expertises" />
                                    <div className="text-red-600 text-s">{errors.expertises?.message}</div>

                                </div>
                            </div>

                            <h1 className="mt-2 font-bold text-sm">Social Medias</h1>
                            <div className="flex flex-col w-full items-center px-6 gap-4">
                                {fields.map((field, index) => {
                                    const item = socialMediaList.find((item) => item.name === field.name);
                                    const error = errors.socialMedia?.[index]?.link;

                                    return (
                                        <div key={item?.name || index} className="flex flex-col w-full gap-1">
                                            <div className="flex w-full items-center gap-2">
                                                {item?.icon}
                                                <input
                                                    type="url"
                                                    {...register(`socialMedia.${index}.link`)}
                                                    placeholder={`${item?.name.toLowerCase()} link`}
                                                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
                                                />
                                                <input type="hidden" {...register(`socialMedia.${index}.name`)} />
                                            </div>
                                            {error && (
                                                <span className="text-red-600 text-sm">
                                                    {error.message}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}


                            </div>

                            <h1 className="mt-2 font-bold text-sm">Upload the image</h1>

                            {/* image input */}
                            <MultipleImagesInput control={control} isMultiple={false} name="image" />
                            <div className="text-red-600 text-s">{errors.image?.message}</div>


                            <div className="flex gap-4 w-full justify-end mt-5">
                                <button type="button" className='p-2 rounded-xl cursor-pointer bg-red-600 text-white' onClick={() => setIsOpen(false)}>Cancel</button>
                                <Button
                                    type="submit"
                                    label="Submit"
                                    loading={createUserMutation.isPending}
                                />
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

