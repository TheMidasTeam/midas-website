"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
    const ROWS = 5;
    const COLS = 4;
    const TOTAL_ITEMS = ROWS * COLS;

    const [animateRows, setAnimateRows] = useState<boolean[]>(Array(ROWS).fill(false));
    const [hovered, setHovered] = useState<boolean[]>(Array(TOTAL_ITEMS).fill(false));
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

    useEffect(() => {
        timeoutsRef.current = Array.from({ length: ROWS }, (_, index) =>
            setTimeout(() => {
                setAnimateRows(prev => {
                    const newRows = [...prev];
                    newRows[index] = true;
                    return newRows;
                });
            }, index * 500) // Staggered animation delay
        );

        return () => timeoutsRef.current.forEach(clearTimeout);
    }, []);

    const handleHover = (index: number) => {
        setHovered(prev => {
            const newHovered = [...prev];
            newHovered[index] = true;
            return newHovered;
        });
    };

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center space-y-6 px-4 md:px-8 lg:px-16">
            {animateRows.map((animated, rowIndex) => (
                <div 
                    key={rowIndex} 
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${COLS} gap-4 transition-opacity duration-700 ${animated ? "opacity-100" : "opacity-0"}`}
                >
                    {Array.from({ length: COLS }, (_, colIndex) => {
                        const itemIndex = rowIndex * COLS + colIndex;
                        return (
                            <span
                                key={itemIndex}
                                className="w-full flex justify-center items-center transition-colors duration-500 text-blue-500 hover:text-yellow-500 cursor-pointer font-caprasimo text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                                onMouseEnter={() => handleHover(itemIndex)}
                            >
                                <span className={`transition-opacity duration-500 ${hovered[itemIndex] ? "opacity-0" : "opacity-100"}`}>
                                    GOOD
                                </span>
                                <span className={`absolute transition-opacity duration-500 ${hovered[itemIndex] ? "opacity-100 text-yellow-500" : "opacity-0"}`}>
                                    GOLD
                                </span>
                            </span>
                        );
                    })}
                </div>
            ))}

            <div className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-crimson">
                Redefining the <span className="text-yellow-500 italic">gold</span> standard of website design
            </div>

            <Link href="#Contact">
                <button className="bg-yellow-500 text-black rounded-full px-5 py-3 sm:px-7 sm:py-4 font-semibold transition hover:bg-yellow-600 text-lg sm:text-xl">
                    Book a Free Consultation
                </button>
            </Link>
        </section>
    );
}


