import { useSearchParams } from "react-router";

type TProps = {
    data?: {
        page: number;
        total: number;
        limit: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
        next?: any;
        previous?: any;
    };
};

export const Pagination = ({ data }: TProps) => {
    const [params, setParams] = useSearchParams();

    const onClick = (page: number) => {
        params.set("page", page.toString());
        setParams(params); // updates URL without reload
    };

    const onPreviousClick = () => {
        if (data?.hasPrev && data.previous) {
            onClick(data.previous.page);
        }
    };

    const onNextClick = () => {
        if (data?.hasNext && data.next) {
            onClick(data.next.page);
        }
    };

    const onLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        params.set("limit", e.target.value);
        params.set("page", "1"); // reset to first page when limit changes
        setParams(params);
    };

    if (!data) return null;

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-4">
            {/* Info text */}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {(data.page - 1) * data.limit + 1}-
                    {Math.min(data.page * data.limit, data.total)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {data.total}
                </span>
            </span>

            {/* Limit selector */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">Show</span>
                <select
                    value={data.limit}
                    onChange={onLimitChange}
                    className="border rounded-md px-2 py-1 text-sm dark:bg-gray-700 dark:text-white"
                >
                    {[5, 10, 20, 50].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <span className="text-sm text-gray-600 dark:text-gray-300">per page</span>
            </div>

            {/* Pagination buttons */}
            <nav aria-label="Table navigation">
                <ul className="inline-flex -space-x-px text-sm h-8">
                    <li>
                        <button
                            onClick={onPreviousClick}
                            disabled={!data.hasPrev}
                            className="px-3 h-8 flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                        >
                            Previous
                        </button>
                    </li>
                    {(() => {
                        const totalPages = data.totalPages;
                        const currentPage = data.page;
                        const maxVisible = 5; // how many page numbers you want to show

                        // calculate window
                        let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
                        let end = start + maxVisible - 1;

                        if (end > totalPages) {
                            end = totalPages;
                            start = Math.max(end - maxVisible + 1, 1);
                        }

                        const pages = [];
                        for (let page = start; page <= end; page++) {
                            pages.push(
                                <li key={page}>
                                    <button
                                        onClick={() => onClick(page)}
                                        className={`px-3 h-8 flex items-center justify-center border border-gray-300 ${page === currentPage
                                                ? "text-blue-600 bg-blue-50"
                                                : "text-gray-500 bg-white hover:bg-blue-100 hover:text-blue-700"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                </li>
                            );
                        }

                        return pages;
                    })()}

                    <li>
                        <button
                            onClick={onNextClick}
                            disabled={!data.hasNext}
                            className="px-3 h-8 flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
