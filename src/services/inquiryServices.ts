import axios from "axios";

export async function getInquiries (page: number = 1, limit: number = 10) {
    const response = await axios.get("/contacts",{
        params: {
            page,
            limit
        }
    });

    return response.data;
}