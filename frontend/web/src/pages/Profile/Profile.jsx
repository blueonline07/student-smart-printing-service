import icon from '../../assets/images/icon.png';


function Profile() {
    return (
        <div className="flex flex-col bg-gray-200 ">
            <div className="flex flex-col items-center m-4 bg-white min-h-screen rounded-2xl">
            <h1 className="text-4xl font-semibold text-[#000000] p-4">Thông tin cá nhân</h1>
            <img src={icon} alt="icon" className="h-1/6 w-1/6 items-center bg-gray-400 p-2 my-4 rounded-full" />
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 items-center">
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