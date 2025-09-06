import axios from "axios";
import type { TProject, TQueryParams } from "../types";

export async function getProjects (params:TQueryParams) {
    const response = await axios.get("/projects",{
        params: {
            ...params
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