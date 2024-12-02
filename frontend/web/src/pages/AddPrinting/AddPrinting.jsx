import React, { useState } from 'react';
import Table from '../../component/Table';
import { getPrinters } from '../../data/printerData';
import InputField from '../../component/InputField';

function AddPrinting() {
    const [printers, setPrinters] = useState(getPrinters());
    const [isInputFieldVisible, setIsInputFieldVisible] = useState(false);
    const [currentPrinter, setCurrentPrinter] = useState(null);

    const headers = [
        'MÃ MÁY IN',
        'HÃNG',
        'MẪU',
        'PHÒNG',
        'TÒA',
        'CƠ SỞ',
        'TRẠNG THÁI',
        'ĐỊNH DẠNG IN HỖ TRỢ ',
        '',
    ];

    const rows = printers.map((printer) => [
        printer.id,
        printer.brand,
        printer.model,
        printer.room,
        printer.building,
        printer.campus,
        printer.status,
        printer.printables,
    ]);

    const handleAddPrinter = (newPrinter) => {
        let updatedPrinters;

        if (currentPrinter) {
            updatedPrinters = printers.map((printer) =>
                printer.id === currentPrinter.id ? newPrinter : printer,
            );
        } else {
            updatedPrinters = [...printers, newPrinter];
        }

        setPrinters(updatedPrinters);
        setIsInputFieldVisible(false);
        setCurrentPrinter(null);
    };

    const handleEditPrinter = (printer) => {
        setCurrentPrinter(printer);
        setIsInputFieldVisible(true);
    };

    const handleDeletePrinter = (printerId) => {
        const updatedPrinters = printers.filter((printer) => printer.id !== printerId);
        setPrinters(updatedPrinters);
    };

    return (
        <div className="flex flex-col bg-gray-200">
            <div className="m-4 flex min-h-screen flex-col items-center overflow-hidden rounded-2xl bg-white">
                <div className="w-full bg-white px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <label htmlFor="filter" className="font-semibold">
                                Mã máy in:
                            </label>
                            <select
                                id="filter"
                                className="rounded-md border border-gray-300 px-3 py-2"
                            >
                                <option>Tất cả</option>
                            </select>
                        </div>
                        <button
                            onClick={() => setIsInputFieldVisible(true)}
                            className="flex items-center gap-2 rounded-full bg-teal-400 px-4 py-2 text-white shadow-md"
                        >
                            <span className="text-xl">+</span> Thêm máy in
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto px-6 py-4">
                    <Table
                        headers={headers}
                        rows={rows}
                        onEdit={handleEditPrinter}
                        onDelete={handleDeletePrinter}
                    />
                </div>

                {/* InputField */}
                {isInputFieldVisible && (
                    <InputField onAddPrinter={handleAddPrinter} initialData={currentPrinter} />
                )}
            </div>
        </div>
    );
}

export default AddPrinting;
