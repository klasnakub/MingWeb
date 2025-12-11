"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/images/ming_cake.jpg",
    "/images/ming_confirm.jpg",
    "/images/ming_hatching.jpg",
    "/images/ming_transfer_1.jpg",
    "/images/ming_transfer_2.jpg",
    "/images/ming_ultrasound_1.jpg",
];

export default function GalleryPage() {
    const [galleryItems, setGalleryItems] = useState<{ src: string; rotation: number }[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Create items with random rotation first, then shuffle
        const items = images.map((src) => ({
            src,
            rotation: Math.random() * 12 - 6, // -6 to 6 degrees
        }));

        // Fisher-Yates shuffle
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }

        setGalleryItems(items);
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-pink-lavender pt-24 px-4 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-wine-red tracking-tight">
                        Memory Wall
                    </h1>
                    <p className="text-old-lavender text-lg font-light italic">
                        Snapshots of our little miracle
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 p-8">
                    {galleryItems.map((item, index) => {
                        return (
                            <motion.div
                                key={`${item.src}-${index}`}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 20,
                                    transition: { duration: 0.2 }
                                }}
                                className="relative bg-white p-4 pb-12 shadow-xl cursor-pointer group"
                                style={{
                                    rotate: item.rotation, // Use Framer Motion style prop for rotation
                                }}
                            >
                                {/* Pin effect (optional) */}
                                {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-sm z-10" /> */}

                                <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.src}
                                        alt="Ming's Memory"
                                        fill
                                        className="object-cover sepia-[.15] contrast-[1.05] group-hover:sepia-0 transition-all duration-300"
                                    />
                                </div>

                                {/* Handwritten-style caption line (just decoration) */}
                                <div className="absolute bottom-4 left-4 right-4 h-6 border-b border-gray-100 flex items-end justify-center">
                                    <span className="text-gray-400 text-xs font-handwriting opacity-60">Ming's Journey</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
