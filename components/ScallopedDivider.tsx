'use client';

import { cn } from "@/lib/utils";

interface ScallopedDividerProps {
    className?: string;
    color?: string; // Tailwind color class or hex
    up?: boolean;   // If true, the scallops point up
}

export function ScallopedDivider({ className, color = "bg-primary", up = false }: ScallopedDividerProps) {
    return (
        <div className={cn("relative w-full overflow-hidden pointer-events-none", up ? "h-6 mt-[-24px]" : "h-6 mb-[-24px]", className)}>
            <div
                className={cn("absolute inset-0", color)}
                style={{
                    maskImage: `radial-gradient(circle at 50% ${up ? '100%' : '0%'}, black 10px, transparent 11px)`,
                    maskSize: '28px 24px',
                    WebkitMaskImage: `radial-gradient(circle at 50% ${up ? '100%' : '0%'}, black 10px, transparent 11px)`,
                    WebkitMaskSize: '28px 24px',
                }}
            />
            {/* Golden Thread Highlight */}
            <div className={cn(
                "absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-secondary/80 to-transparent",
                up ? "bottom-0" : "top-0"
            )} />
        </div>
    );
}
