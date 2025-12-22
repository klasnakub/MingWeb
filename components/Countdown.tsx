"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date("2026-01-29T00:00:00");

const getTimeLeft = () => {
    const total = Date.parse(TARGET_DATE.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
};

const NumberBox = ({ num, unit }: { num: number; unit: string }) => {
    return (
        <div className="flex flex-col items-center mx-2 sm:mx-4">
            <div className="relative bg-white backdrop-blur-md rounded-lg overflow-hidden w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center border border-white/60 shadow-lg">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={num}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.4, ease: "backOut" }}
                        className="absolute text-2xl sm:text-4xl font-bold text-wine-red font-mono"
                    >
                        {num < 10 ? `0${num}` : num}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-xs sm:text-sm text-vampire-black mt-2 font-bold tracking-wider uppercase">
                {unit}
            </span>
        </div>
    );
};

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!isMounted) return null;

    if (timeLeft.total <= 0) {
        return (
            <div className="text-center text-vampire-black p-8 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-wine-red">She's Here!</h2>
                <p className="text-xl">Welcome to the world, Ming!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-center items-center p-4 sm:p-8 bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl">
            <NumberBox num={timeLeft.days} unit="Days" />
            <NumberBox num={timeLeft.hours} unit="Hours" />
            <NumberBox num={timeLeft.minutes} unit="Minutes" />
            <NumberBox num={timeLeft.seconds} unit="Seconds" />
        </div>
    );
}
