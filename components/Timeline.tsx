"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Timeline() {
    const events = [
        {
            date: "24 May 2025",
            title: "น้องหมิง หนีออกจากเปลือกไข่ พร้อมซนแล้วค่ะ",
            image: "/images/ming_hatching.jpg",
        },
    ];

    return (
        <section className="py-24 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="relative border-l-4 border-transparent ml-4 md:ml-10 space-y-16">
                {/* Continuous Line */}
                <div className="absolute -left-[4px] top-[-24px] bottom-0 w-[4px] bg-wine-red/30 rounded-t-sm" />

                {/* Start Label */}
                <div className="absolute -top-[58px] -left-[2px] transform -translate-x-2 md:-translate-x-1/2 flex flex-col items-center z-20">
                    <span className="bg-wine-red text-pink-lavender text-xs font-bold px-4 py-2 rounded-xl shadow-lg border border-pink-lavender/20 tracking-wider uppercase mb-0">
                        Start Journey
                    </span>
                </div>

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative pl-8 md:pl-16"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[14px] top-9 w-6 h-6 bg-wine-red rounded-full border-4 border-pink-lavender shadow-md z-10" />

                        {/* Branch Connector */}
                        <div className="absolute left-0 top-[47px] w-8 md:w-16 h-[2px] bg-wine-red/30" />

                        {/* Content Card */}
                        <div className="bg-white rounded-3xl p-5 md:p-8 shadow-xl border border-wine-red/10 overflow-hidden transform transition-all hover:shadow-2xl max-w-2xl">

                            {/* Date */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-wine-red/10 text-wine-red font-bold px-4 py-1.5 rounded-full text-xs tracking-wide">
                                    {event.date}
                                </span>
                                <div className="h-px bg-wine-red/10 flex-1" />
                            </div>

                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full bg-pink-lavender/10 rounded-2xl overflow-hidden mb-6 shadow-sm group">
                                <Image
                                    src={event.image}
                                    alt="Ming Hatching"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Caption */}
                            <div className="text-center">
                                <p className="text-lg md:text-xl font-bold text-wine-red leading-relaxed font-[family-name:var(--font-prompt)]">
                                    {event.title}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Connection to future */}
                <div className="absolute -left-1.5 bottom-0 w-3 h-24 bg-gradient-to-b from-wine-red/30 to-transparent" />
            </div>
        </section>
    );
}
