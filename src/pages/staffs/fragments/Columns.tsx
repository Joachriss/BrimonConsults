import type { IColumn } from "../../../types";
import user from "/user.webp";

export const colums: IColumn[] = [
    {
        name: "name",
        label: "Name",
        element: (data: any) => {
            return (
                <div className="flex flex-row gap-1 items-center overflow-hidden">
                    <div className="h-14 w-14">
                        <img src={data.image ? data.image : user} className="object-cover" alt={data.name} />
                    </div>
                    <div className="line-clamp-1 font-bold text-black">{data.name}</div>
                </div>
            )
        }
    },
    {
        name: "title",
        label: "Title"
    }
]