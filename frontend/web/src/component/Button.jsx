import { FiSend } from "react-icons/fi";

const ButtonWrapper = () => {
    return (
        <NeumorphismButton />
    );
};

const NeumorphismButton = () => {
    return (
        <button
            className={`
        px-4 py-2 rounded-full
        flex items-center gap-2
        text-white
        font-medium
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-black
    `}
        >
            <span>Trang chủ</span>
        </button>
    );
};

export default ButtonWrapper;