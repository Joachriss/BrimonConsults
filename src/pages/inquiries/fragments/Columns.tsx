import type { IColumn, IInquiry } from "../../../types";

export const columns: IColumn[] = [
    {
        name: "name",
        label: "Name"
    },
    {
        name: "email",
        label: "Email"
    },
    {
        name: "subject",
        label: "Subject",
        element: (data: IInquiry) => {
            return (
                <div className="flex flex-row gap-1 items-center overflow-hidden">
                    <div className="line-clamp-1">{data.message}</div>
                </div>
            )
        }
    },
    {
        name: "message",
        label: "Message",
        element: (data: IInquiry) => {
            return (
                <div className="flex flex-row gap-1 items-center overflow-hidden">
                    <div className="line-clamp-1">{data.message}</div>
                </div>
            )
        }
    }
]