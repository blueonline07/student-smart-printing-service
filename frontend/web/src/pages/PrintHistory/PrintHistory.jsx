import { useState, useEffect } from 'react';
import axios from 'axios';

function PrintHistory() {
    const [printHistory, setPrintHistory] = useState([]);
    const [filteredPrintHistory, setFilteredPrintHistory] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/orders')
            .then(
                (response) => setPrintHistory(response.data),
                setFilteredPrintHistory(printHistory),
            )
            .catch((error) => console.error('Error:', error));
    }, []);

    const filterByPrinter = (e) => {
        const selectedPrinter = e.target.value;
        if (selectedPrinter === 'all') {
            setFilteredPrintHistory(printHistory);
            return;
        }
        setFilteredPrintHistory(
            printHistory.filter((print) => print.printerId === selectedPrinter),
        );
    };
    const filterByDocument = (e) => {
        const selectedDocument = e.target.value;
        if (selectedDocument === 'all') {
            setFilteredPrintHistory(printHistory);
            return;
        }
        setFilteredPrintHistory(
            printHistory.filter((print) => print.printType === selectedDocument),
        );
    };

    return (
        <div className="flex flex-col bg-gray-200">
            <div className="m-4 flex min-h-screen flex-col rounded-2xl bg-white">
                <div className="mt-4 flex flex-row pt-2">
                    <div className="mx-16 mb-4">
                        <label
                            htmlFor="filterPrinter"
                            className="mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Máy in:
                        </label>
                        <select
                            id="filterPrinter"
                            className="mb-6 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            onChange={(e) => filterByPrinter(e)}
                        >
                            <option value="all">Tất cả</option>
                            <option value="LBP 29000">LBP 29000</option>
                            <option value="ABCXYZ">ABCXYZ</option>
                        </select>
                    </div>
                    <div className="mx-16 mb-4">
                        <label
                            htmlFor="filterDocument"
                            className="mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Kiểu in:
                        </label>
                        <select
                            id="filterDocument"
                            className="mb-6 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            onChange={(e) => filterByDocument(e)}
                        >
                            <option value="all">Tất cả</option>
                            <option value="SEMIAUTO">SEMIAUTO</option>
                            <option value="AUTO">AUTO</option>
                        </select>
                    </div>
                </div>
                <div
                    className="relative mx-4 overflow-x-auto shadow-md sm:rounded-lg"
                    style={{ maxHeight: '400px' }}
                >
                    <table className="w-full text-center text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Mã đơn in
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Máy in
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tên sinh viên
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kiểu in
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tên tài liệu
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ngày tạo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ngày in xong
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Trạng thái
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                            {filteredPrintHistory &&
                                filteredPrintHistory.map((print) => (
                                    <tr key={print.id}>
                                        <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {print.id}
                                        </td>
                                        <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {print.printer}
                                        </td>
                                        <td className="px-6 py-4">{print.student}</td>
                                        <td className="px-6 py-4">{print.type}</td>
                                        <td className="px-6 py-4">{print.files}</td>
                                        <td className="px-6 py-4">{print.create_at}</td>
                                        <td className="px-6 py-4">{print.available_at}</td>
                                        <td
                                            className="px-6 py-4 font-medium"
                                            style={
                                                print.status === 'PENDING'
                                                    ? { color: 'orange' }
                                                    : { color: 'green' }
                                            }
                                        >
                                            {print.status}
                                        </td>
                                    </tr>
                                ))}
                            <tr>
                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    1
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    Máy in 1
                                </td>
                                <td className="px-6 py-4">Nguyễn Văn A</td>
                                <td className="px-6 py-4">In lấy sau</td>
                                <td className="px-6 py-4">Bài tập lớn</td>
                                <td className="px-6 py-4">2021-10-10</td>
                                <td className="px-6 py-4">2021-10-10</td>
                                <td className="px-6 py-4 font-medium text-green-600">Đã in xong</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PrintHistory;
