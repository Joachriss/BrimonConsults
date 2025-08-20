import axios from "axios";
import type { IFaq } from "../types";

export async function getFaqs(page: number = 1, limit: number = 10) {
    const response = await axios.get("/faqs", { params: { page, limit } }); // make sure the path is correct
    return response.data;
}



export async function createFaq (data:IFaq){
    const response = await axios.post("faqs/create",data);

    return response.data
}

export async function editFaq (data:IFaq){
    const response = await axios.put("faqs/edit",data);

    return response.data
}

export async function archiveFaq(id: string) {
    const response = await axios.put(`faqs/archive/${id}`);
    return response.data;
}