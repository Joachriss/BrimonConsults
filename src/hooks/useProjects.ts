import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/projectServices";

export function useProjects() {
    const [params] = useSearchParams();
    const page = parseInt(params.get("page") || "1");
    const limit = parseInt(params.get("limit") || "10");

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["projects", page, limit],   // ✅ queryKey changes => auto refetch
        queryFn: () => getProjects(page, limit),
    });

    return {
        isLoading,
        projects: data,
        refetch
    };
}
