import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../services/faqServices";
import { useSearchParams } from "react-router";

export function useFaqs() {
    const [params] = useSearchParams();
    const page = parseInt(params.get("page") || "1");
    const limit = parseInt(params.get("limit") || "10");
    const { isLoading,data,refetch } = useQuery({
        queryKey: ["faqskey", page, limit],
        queryFn:()=> getFaqs(page, limit),
        refetchInterval:1500000
    })
    return {
        isLoading,
        faqs:data,
        refetch
    }
}

