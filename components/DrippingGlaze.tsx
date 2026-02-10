'use client';

import { motion } from "framer-motion";

export function DrippingGlaze() {
    const drips = [
        { left: '10%', height: '40px', delay: 0 },
        { left: '25%', height: '60px', delay: 1.5 },
        { left: '45%', height: '30px', delay: 3 },
        { left: '60%', height: '70px', delay: 0.5 },
        { left: '80%', height: '50px', delay: 2 },
        { left: '95%', height: '20px', delay: 4 },
    ];

    return (
        <div className="absolute top-[74px] left-0 right-0 h-20 pointer-events-none z-40 overflow-hidden">
            {drips.map((drip, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: drip.height,
                        opacity: [0, 0.6, 0.4, 0],
                        y: [0, 20, 40]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: drip.delay,
                        ease: "easeInOut"
                    }}
                    style={{ left: drip.left }}
                    className="absolute w-2 bg-gradient-to-b from-primary/40 to-transparent rounded-full blur-[2px]"
                />
            ))}
        </div>
    );
}
