import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

const Example = ({ text, icon }) => {
    return (
        <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
            <TiltCard text={text} icon={icon} />
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ text, icon }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
                width: "268px",
                height: "175px",
                gap: "0px",
                borderRadius: "50px 0px 0px 0px",
                opacity: "0px",
                background: "linear-gradient(180deg, #00C0EF 0%, #20C997 100%)",
            }}
            className="relative rounded-xl"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                    background: "linear-gradient(180deg, #00C0EF 0%, #20C997 100%)",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl shadow-lg"
            >
                <img
                    src={icon}
                    alt={text}
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="mx-auto h-10 w-10"
                />
                <p
                    style={{
                        transform: "translateZ(50px)",
                        color: text === "SPSO" ? "white" : "inherit",
                    }}
                    className="text-center text-2xl font-bold"
                >
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

export default Example;