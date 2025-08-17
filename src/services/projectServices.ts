import axios from "axios";
import type { TProject } from "../types";

export async function getProjects (page: number = 1, limit: number = 10) {
    const response = await axios.get("/projects",{
        params: {
            page,
            limit
        }
    });
    return response.data
}

export async function createProject (data:TProject){
    const response = await axios.post("/projects/create",data);

    return response.data
}

export async function editProject (data:TProject){
    const response = await axios.put("/projects/edit",data);

    return response.data
}

export async function archiveProject (id:string){
    const response = await axios.put(`/projects/archive/${id}`);

    return response.data
}