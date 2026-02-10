'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AzulejosPattern({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}>
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.25, 0.30, 0.25]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-[-100px]"
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diamond-tuft-vibrant" x="0" y="0" width="120" height="200" patternUnits="userSpaceOnUse">
                            <rect width="120" height="200" fill="none" />

                            {/* Colorful Diamond Fills - Moving away from gray */}
                            {/* Soft Rose/Berry Fill */}
                            <path
                                d="M60 0 L120 100 L60 200 L0 100 Z"
                                fill="#FDF2F2" /* Very pale pink blush */
                                opacity="0.8"
                            />

                            {/* Warm Honey/Cream alternating fills */}
                            <path
                                d="M0 0 L60 100 L0 200 Z"
                                fill="#FEF9C3" /* Pale honey yellow */
                                opacity="0.5"
                            />
                            <path
                                d="M120 0 L60 100 L120 200 Z"
                                fill="#FEF9C3" /* Pale honey yellow */
                                opacity="0.5"
                            />

                            {/* Trellis Lines - Golden Brown / Toasted Honey */}
                            <g stroke="#D4AF37" fill="none" strokeWidth="1.2">
                                <path d="M0 100 L60 0 L120 100 L60 200 Z" opacity="0.4" />
                                <path d="M60 0 L120 100 L60 200 L0 100 Z" opacity="0.4" />
                            </g>

                            {/* Stitching Effect - Warm Reddish/Berry tone */}
                            <g stroke="#BC4A4A" fill="none" strokeWidth="0.5" strokeDasharray="3,5" opacity="0.3">
                                <path d="M10 100 L60 10 L110 100 L60 190 Z" />
                            </g>

                            {/* Gold Tufts (Pins) - Bright Metallic Gold */}
                            <circle cx="60" cy="0" r="3.5" fill="#EAB308" />
                            <circle cx="60" cy="200" r="3.5" fill="#EAB308" />
                            <circle cx="0" cy="100" r="3.5" fill="#EAB308" />
                            <circle cx="120" cy="100" r="3.5" fill="#EAB308" />

                            {/* Central Berry Accent */}
                            <circle cx="60" cy="100" r="2" fill="#991B1B" opacity="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diamond-tuft-vibrant)" />
                </svg>
            </motion.div>

            {/* Heavy Warm Glow Overlay - Sunset Honey Tone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EAB308]/10 via-transparent to-[#991B1B]/5 mix-blend-multiply opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(217,119,6,0.05)_100%)]" />
        </div>
    );
}
