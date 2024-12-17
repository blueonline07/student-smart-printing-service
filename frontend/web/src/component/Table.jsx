import React from 'react';

const Table = ({ headers, rows, onEdit, onDelete }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        {/*<div className="flex items-center">*/}
                        {/*    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />*/}
                        {/*    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>*/}
                        {/*</div>*/}
                    </th>
                    {headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            {/*<div className="flex items-center">*/}
                            {/*    <input id={`checkbox-table-search-${rowIndex}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />*/}
                            {/*    <label htmlFor={`checkbox-table-search-${rowIndex}`} className="sr-only">checkbox</label>*/}
                            {/*</div>*/}
                        </td>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-6 py-4">
                                {cell}
                            </td>
                        ))}
                        <td className="flex items-center px-6 py-4">
                            <button onClick={() => onEdit(row[row.length - 1])}>
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh sửa</a>
                            </button>
                            <button onClick={() => onDelete(row[0])}>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Xóa</a>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default Table;