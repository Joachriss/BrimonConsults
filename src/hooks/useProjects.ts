import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/projectServices";

export function useProjects() {
    const [params] = useSearchParams();
    const page = parseInt(params.get("page") || "1");
    const limit = parseInt(params.get("limit") || "10");

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["projects", page, limit], 
        queryFn: () => getProjects({ page, limit }),
        refetchInterval: 1500000
    });

    return {
        isLoading,
        projects: data,
        refetch
    };
}
