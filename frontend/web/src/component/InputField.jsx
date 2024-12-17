import React, { useState } from 'react';
import SlideInNotifications from "./Notification";

const InputField = ({ onAddPrinter }) => {
    const [formData, setFormData] = useState({
        id: '',
        brand: "",
        model: "",
        room: "",
        building: "",
        campus: "",
        status: "",
        printables: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPrinter(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã máy
                        in</label>
                    <input type="text" id="id" value={formData.id} onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="1" required/>
                </div>
                <div>
                    <label htmlFor="brand"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hãng</label>
                    <input type="text" id="brand" value={formData.brand} onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="HP" required/>
                </div>
                <div>
                    <label htmlFor="model"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mẫu</label>
                    <input type="text" id="model" value={formData.model} onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="ABC" required/>
                </div>
                <div>
                    <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phòng
                    </label>
                    <input type="text" id="room" value={formData.room} onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="101" required/>
                </div>
                <div>
                    <label htmlFor="building" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Tòa</label>
                    <input type="text" id="building" value={formData.building} onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="H6" required/>
                </div>
                <div>
                    <label htmlFor="campus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cơ
                        sở</label>
                    <input type="text" id="campus" value={formData.campus} onChange={handleChange}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="BK1" required/>
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trạng
                    thái</label>
                <select
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="">Chọn trạng thái</option>
                    <option value="Kích hoạt">Kích hoạt</option>
                    <option value="Vô hiệu hóa">Vô hiệu hóa</option>
                </select>
            </div>
            <div className="mb-6">
                <label htmlFor="printables" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Định
                    dạng in hỗ trợ</label>
                <input type="text" id="printables" value={formData.printables} onChange={handleChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="docx, pdf,..." required/>
            </div>
            <SlideInNotifications/>
            {/*<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật</button>*/}
        </form>
    );
};

export default InputField;