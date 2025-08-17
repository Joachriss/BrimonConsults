import type { IColumn, IFaq } from "../../../types";

export const colums: IColumn[] = [
    {
        name: "question",
        label: "Question",
        element: (data: any) => {
            return (
                <div className="flex flex-row gap-1 items-center overflow-hidden">
                    <div className="line-clamp-1">{data.question}</div>
                </div>
            )
        }
    },
    {
        name: "answer",
        label: "Answer",
        element: (data: IFaq) => {
            return (
                <div className="flex flex-row gap-1 items-center overflow-hidden">
                    <div className="line-clamp-1">{data.answer}</div>
                </div>
            )
        }
    }
]