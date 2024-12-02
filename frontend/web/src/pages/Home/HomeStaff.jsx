import bg1 from '../../assets/images/bg1.png';
import hcmut from '../../assets/images/hcmut.png';

function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-grow bg-cyan-600 bg-opacity-95 px-6 py-6">
                <div className="flex flex-col">
                    <h2 className="pt-2 text-5xl font-semibold text-[#ffffff]">
                        HỆ THỐNG IN ẤN THÔNG MINH
                    </h2>
                    <img src={hcmut} alt="HCMUT" className="mt-8 h-auto w-3/6" />
                    <p className="pt-8 text-2xl font-medium text-white">
                        Hệ thống in ấn thông minh dành cho sinh viên và giảng viên trường Đại học
                        Bách Khoa TPHCM.
                    </p>
                </div>
                <img
                    src={bg1}
                    alt="Student Smart Printing Service"
                    className="mx-6 flex h-5/6 w-1/3"
                />
            </div>
        </div>
    );
}

export default Home;
