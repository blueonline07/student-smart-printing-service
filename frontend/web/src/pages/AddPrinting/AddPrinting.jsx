import React, { useState } from 'react';
import Table from '../../component/Table';
import { getPrinters } from '../../data/printerData';
import InputField from '../../component/InputField';

function AddPrinting() {
    const [printers, setPrinters] = useState(getPrinters());
    const [isInputFieldVisible, setIsInputFieldVisible] = useState(false);
    const [currentPrinter, setCurrentPrinter] = useState(null);

    const headers = ["MÃ MÁY IN", "HÃNG", "MẪU", "PHÒNG", "TÒA","CƠ SỞ", "TRẠNG THÁI", "ĐỊNH DẠNG IN HỖ TRỢ ", ""];

    const rows = printers.map(printer => [
        printer.id,
        printer.brand,
        printer.model,
        printer.room,
        printer.building,
        printer.campus,
        printer.status,
        printer.printables
    ]);


    const handleAddPrinter = (newPrinter) => {
        let updatedPrinters;

        if (currentPrinter) {
            updatedPrinters = printers.map(printer =>
                printer.id === currentPrinter.id ? newPrinter : printer
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
        const updatedPrinters = printers.filter(printer => printer.id !== printerId);
        setPrinters(updatedPrinters);
    };

    return (
        <div className="flex flex-col">
            <div className="w-full bg-white py-4 px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <label htmlFor="filter" className="font-semibold">
                            Mã máy in:
                        </label>
                        <select
                            id="filter"
                            className="border border-gray-300 rounded-md px-3 py-2"
                        >
                            <option>Tất cả</option>
                        </select>
                    </div>
                    <button
                        onClick={() => setIsInputFieldVisible(true)}
                        className="bg-teal-400 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2"
                    >
                        <span className="text-xl">+</span> Thêm máy in
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full px-6 py-4">
                <Table headers={headers} rows={rows} onEdit={handleEditPrinter} onDelete={handleDeletePrinter} />
            </div>

            {/* InputField */}
            {isInputFieldVisible && <InputField onAddPrinter={handleAddPrinter} initialData={currentPrinter} />}
        </div>
    );
}

export default AddPrinting;
