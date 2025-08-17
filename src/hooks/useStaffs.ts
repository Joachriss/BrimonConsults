import { useQuery } from "@tanstack/react-query";
import { geTUsers } from "../services/userServices";
import { useSearchParams } from "react-router";

export function useStaffs() {
    const [params] = useSearchParams();
    const page = parseInt(params.get("page") || "1");
    const limit = parseInt(params.get("limit") || "10");
    const { isLoading,data,refetch } = useQuery({
        queryKey: ["staffskey", page, limit],
        queryFn:()=> geTUsers(page, limit),
        refetchInterval:600000
    })
    return {
        isLoading,
        staffs:data,
        refetch
    }
}

