import icon from '../../assets/images/icon.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProfileStaff() {
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
            .get('http://localhost:8000/staffs/id')
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex flex-col bg-gray-200">
            <div className="m-4 flex min-h-screen flex-col items-center rounded-2xl bg-white">
                <h1 className="p-4 text-4xl font-semibold text-[#000000]">Thông tin cá nhân</h1>
                <img
                    src={icon}
                    alt="icon"
                    className="my-4 h-1/6 w-1/6 items-center rounded-full bg-gray-400 p-2"
                />
                <div className="grid grid-flow-col grid-cols-2 items-center gap-4">
                    <div className="flex flex-row p-4">
                        <p className="pr-2 text-2xl font-semibold text-[#000000]">Họ và Tên: </p>
                        <p className="text-2xl font-medium text-[#000000]">{user.name}</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="pr-2 text-2xl font-semibold text-[#000000]">Email: </p>
                        <p className="text-2xl font-medium text-[#000000]">{user.email}</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="pr-2 text-2xl font-semibold text-[#000000]">Nơi làm việc: </p>
                        <p className="text-2xl font-medium text-[#000000]">{user.workplace}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileStaff;
