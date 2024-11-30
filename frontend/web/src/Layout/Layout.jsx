import logo from '../assets/images/logo.png';
import logobk from '../assets/images/logobk.png';
import spss from '../assets/images/spss.png';
import icon from '../assets/images/icon.png';
import {SlideTabsExample} from "../component/Tab";

function Header() {
    return (
        <div className="header min-h-[60px] bg-gradient-to-r from-[#00C0EF] to-[rgb(119,216,240)]">
            <div className="flex items-center px-6 py-3">
                <img src={logo} alt="Student Smart Printing Service" className="h-12 w-48" />
                <div className="flex flex-row ml-auto">
                    <SlideTabsExample />
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className="flex bg-gray-600 py-3 text-white">
            <div className="flex flex-col px-6">
                <h2 className="text-xl font-normal">Smart Printing Service Officer / SPSO</h2>
                <p>spso@hcmut.edu.vn</p>
                <p>(+84) 123456789</p>
                <p>101-BK.B1, Trường Đại học Bách khoa ĐHQG-HCM</p>
            </div>
            <div className="ml-auto flex flex-row items-center px-6">
                <img src={logobk} alt="BK" className="h-22 w-24" />
                <img src={spss} alt="SPSS" className="w-18 ml-4 h-28" />
            </div>
        </div>
    );
}

function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-bgColor">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;