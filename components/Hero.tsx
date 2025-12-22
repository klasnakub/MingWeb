"use client";

import Countdown from "./Countdown";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Solid Background */}
            <div className="absolute inset-0 z-0 bg-pink-lavender" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-4 w-full max-w-5xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-wine-red text-lg md:text-2xl font-light tracking-[0.2em] uppercase">
                        New Chapter Begins
                    </h2>
                    <h1 className="text-wine-red text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.04em] drop-shadow-[0_2px_10px_rgba(163,14,43,0.2)]">
                        MING
                    </h1>
                </div>

                <div className="mt-8">
                    <Countdown />
                </div>

                <div className="mt-12 text-old-lavender text-sm md:text-base font-light tracking-widest">
                    JAN 29, 2026 • THE JOURNEY STARTS
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 z-10 animate-bounce">
                <svg
                    className="w-6 h-6 text-wine-red/60"
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
