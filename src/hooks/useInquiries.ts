import { useQuery } from "@tanstack/react-query";
import { getInquiries } from "../services/inquiryServices";
import { useSearchParams } from "react-router";

export function useInquiries() {
    const [params] = useSearchParams();
    const page = parseInt(params.get("page") || "1");
    const limit = parseInt(params.get("limit") || "10");
    const { isLoading,data } = useQuery({
        queryKey: ["inquirieskey", page, limit],
        queryFn:()=> getInquiries(page, limit),
        refetchInterval:1500000
    })
    return {
        isLoading,
        inquiries:data
    }
}

