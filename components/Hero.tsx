"use client";

import Countdown from "./Countdown";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Solid Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-800 via-gray-900 to-black" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-4 w-full max-w-5xl mx-auto">
                <div className="space-y-2">
                    <h2 className="text-white/80 text-lg md:text-2xl font-light tracking-[0.2em] uppercase">
                        New Chapter Begins
                    </h2>
                    <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight drop-shadow-2xl">
                        MING
                    </h1>
                </div>

                <div className="mt-8">
                    <Countdown />
                </div>

                <div className="mt-12 text-white/70 text-sm md:text-base font-light tracking-widest">
                    FEB 7, 2026 • THE JOURNEY STARTS
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 z-10 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
}
