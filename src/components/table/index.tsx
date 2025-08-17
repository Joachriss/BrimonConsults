import type { IColumn } from "../../types";
import { MdSearchOff } from "react-icons/md";
import { Pagination } from "./fragments/Pagination";

type ITableProps = {
    columns: IColumn[];
    hasActions: boolean;
    actions?: (contact: any | null) => any;
    hasSelection: boolean;
    data: any | [];
    isLoading: boolean;
}
export const Table = ({ columns, hasActions, data, hasSelection, isLoading, actions }: ITableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            hasSelection &&
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                        }

                        {
                            columns?.map((column: IColumn) =>
                                <th scope="col" key={Math.random()} className="px-6 py-3">
                                    {column.label}
                                </th>
                            )
                        }
                        {
                            hasActions &&
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        }
                    </tr>
                </thead>
                {
                    isLoading ?
                        <tbody>
                            {
                                [...Array(10)].map(() =>
                                    <tr key={Math.random()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        {
                                            columns?.map(() =>
                                                <td key={Math.random()} className="p-4 animate-pulse duration-200">
                                                    <div className="w-full h-5 bg-slate-300 rounded"></div>
                                                </td>
                                            )
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                        :
                        data && data.results.length > 0 ?
                            <tbody>
                                {
                                    data?.results.map((data: any) =>
                                        <tr key={Math.random()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            {
                                                hasSelection &&
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                            }
                                            {
                                                columns?.map((column: IColumn) =>
                                                    <td key={Math.random()} className="px-6 py-4 overflow-hidden">
                                                        {
                                                            column.element ?
                                                                column.element(data)
                                                                :
                                                                data[column.name]
                                                        }
                                                    </td>
                                                )
                                            }
                                            {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                    </th> */}

                                            {
                                                hasActions &&
                                                <td className="px-6 py-4">
                                                    {
                                                        actions && actions(data)
                                                    }
                                                </td>
                                            }
                                        </tr>

                                    )
                                }
                            </tbody>
                            :
                            <tbody className="bg-white border-none">
                                <tr className="text-center">
                                    <td className="px-4 py-12 whitespace-pre-line" colSpan={100}>

                                        <div className="text-slate-300 text-sm flex flex-col items-center">
                                            <MdSearchOff size={60} />
                                            There is no data available.
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                }

            </table>
            <Pagination
                data={data}
            />
        </div>
    )
}
