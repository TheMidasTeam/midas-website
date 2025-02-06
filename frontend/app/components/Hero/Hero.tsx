"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [animateRows, setAnimateRows] = useState(new Array(5).fill(false));
    const [hovered, setHovered] = useState(new Array(20).fill(false));

    useEffect(() => {
        const timeouts = animateRows.map((_, index) =>
            setTimeout(() => {
                setAnimateRows(prev => prev.map((val, i) => (i === index ? true : val)));
            }, index * 500) // Staggered animation delay
        );

        return () => timeouts.forEach(clearTimeout);
    }, []);

    const handleHover = (index) => {
        setHovered(prev => prev.map((val, i) => (i === index ? true : val)));
    };

    return (
        <section className="w-full h-[90vh] bg-black flex flex-col items-center justify-center space-y-6">
            {animateRows.map((animated, rowIndex) => (
                <div 
                    key={rowIndex} 
                    className={`grid grid-cols-4 gap-4 transition-opacity duration-700 ${animated ? "opacity-100" : "opacity-0"}`}
                >
                    {Array(4).fill().map((_, colIndex) => {
                        const itemIndex = rowIndex * 4 + colIndex;
                        return (
                            <span
                                key={itemIndex}
                                className="w-[60px] flex justify-center items-center transition-colors duration-500 text-blue-500 hover:text-yellow-500 cursor-pointer"
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

            <div className="text-center text-white text-lg">
                Redefining the <span className="text-yellow-500">gold</span> standard of website design
            </div>

            <div>
                <button className="bg-yellow-500 text-black rounded-full px-6 py-3 font-semibold transition hover:bg-yellow-600">
                    Book a Free Consultation
                </button>
            </div>
        </section>
    );
}

