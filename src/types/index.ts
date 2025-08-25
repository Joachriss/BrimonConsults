import type { TUserType } from "../pages/staffs/fragments/AddStaffModal";

export type IColumn = {
    label:string;
    name:string;
    element?:(content:any)=>any;
}

export type IFaq = {
    id?:string;
    question: string;
    answer: string;
}

export type IInquiry = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export type TUser = TUserType

export type TProject = {
    id?:string;
    title: string;
    description: string;
    wallpaper?:number;
    images: File[] | String[];
}

