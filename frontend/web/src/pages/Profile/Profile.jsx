import icon from '../../assets/images/icon.png';

function Profile() {
    return (
        <div className="flex flex-col bg-gray-200">
            <div className="m-4 flex min-h-screen flex-col items-center rounded-2xl bg-white">
                <h1 className="p-4 text-4xl font-semibold text-[#000000]">Thông tin cá nhân</h1>
                <img
                    src={icon}
                    alt="icon"
                    className="my-4 h-1/6 w-1/6 items-center rounded-full bg-gray-400 p-2"
                />
                <div className="grid grid-flow-col grid-cols-2 grid-rows-2 items-center gap-4">
                    <div className="flex flex-row p-4">
                        <p className="text-2xl font-semibold text-[#000000]">Mã số: </p>
                        <p className="text-2xl font-medium text-[#000000]">2213211</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="text-2xl font-semibold text-[#000000]">Ngày sinh: </p>
                        <p className="text-2xl font-medium text-[#000000]">10/10/2004</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="text-2xl font-semibold text-[#000000]">Họ và Tên: </p>
                        <p className="text-2xl font-medium text-[#000000]">Trần Đức Huy</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="text-2xl font-semibold text-[#000000]">Email: </p>
                        <p className="text-2xl font-medium text-[#000000]">abc@hcmut.edu.vn</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="text-2xl font-semibold text-[#000000]">Số điện thoại: </p>
                        <p className="text-2xl font-medium text-[#000000]">0123456789</p>
                    </div>
                    <div className="flex flex-row p-4">
                        <p className="text-2xl font-semibold text-[#000000]">Giới tính: </p>
                        <p className="text-2xl font-medium text-[#000000]">Nam</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
