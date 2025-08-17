import type { IColumn } from "../../../types";

export const colums: IColumn[] = [
    {
        name: "title",
        label: "Name",
        element: (data: any) => {
            return (
                <div className="flex flex-row gap-1 items-center overflow-hidden">
                    <div className="h-14 w-14">
                        <img src={data.images[0]} className="object-cover" alt={data.title} />
                    </div>
                    <div className="line-clamp-1">{data.title}</div>
                </div>
            )
        }
    },
    {
        name: "description",
        label: "Description"
    }
]