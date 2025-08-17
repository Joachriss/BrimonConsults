import axios from "axios";

export async function geTUsers (page: number = 1, limit: number = 10) {
    const response = await axios.get("/users",{
        params: {
            page,
            limit
        }
    });

    return response.data
}

export async function addStaff (data:any){
    const response = await axios.post("/users/add-staff",data);
    return response.data
}

export async function editUser (data:any){
    const response = await axios.put("/users/edit",data);
    return response.data
}

export async function archiveUser (id:string){
    const response = await axios.put(`/users/archive/${id}`);

    return response.data
}