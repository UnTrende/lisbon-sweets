'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleCart } from '@/lib/features/cartSlice';
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const t = useTranslations('nav');

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const navItems = ['home', 'gallery', 'designer', 'about'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className={cn(
                "bg-primary text-primary-foreground border-b border-secondary/50 relative overflow-hidden transition-all duration-500",
                isScrolled ? "shadow-lg py-0" : "shadow-2xl py-1"
            )}>
                {/* Diamond Tufted Integrated Pattern Layer */}
                <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-0">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="header-diamond-pattern" x="0" y="0" width="80" height="120" patternUnits="userSpaceOnUse">
                                <path
                                    d="M0 60 L40 0 L80 60 L40 120 Z"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.5"
                                    className="opacity-20"
                                />
                                <circle cx="40" cy="0" r="1" fill="white" className="opacity-30" />
                                <circle cx="40" cy="120" r="1" fill="white" className="opacity-30" />
                                <circle cx="0" cy="60" r="1" fill="white" className="opacity-30" />
                                <circle cx="80" cy="60" r="1" fill="white" className="opacity-30" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#header-diamond-pattern)" />
                    </svg>
                </div>

                {/* Sunlight Highlight Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none z-0" />

                <div className="container mx-auto px-4 flex items-center justify-between transition-all duration-300 h-16 relative z-10">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-11 h-11 rounded-full bg-primary-foreground flex items-center justify-center text-primary font-serif font-bold text-fluid-2xl shadow-inset-brand shadow-brand-md border-2 border-secondary/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                            P
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-primary-foreground leading-none text-fluid-2xl tracking-tighter drop-shadow-md transition-all group-hover:tracking-normal">
                                Petals E Sweets
                            </span>
                            <span className="font-sans text-fluid-xs tracking-[0.4em] text-secondary font-black uppercase mt-1 drop-shadow-sm">
                                Patisserie & Boulangerie
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navItems.map((key) => (
                            <Link
                                key={key}
                                href={key === 'home' ? '/' : `/${key}`}
                                className="relative font-sans text-xs font-black uppercase tracking-[0.25em] text-primary-foreground/95 hover:text-white transition-all group/link py-2"
                            >
                                {t(key)}
                                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-secondary transition-all group-hover/link:w-full shadow-glow-secondary" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => dispatch(toggleCart())}
                            className="hover:bg-white/25 text-primary-foreground relative rounded-full transition-all hover:scale-125 hover:rotate-3 shadow-md border border-white/10"
                        >
                            <ShoppingBag className="w-5 h-5 drop-shadow-lg" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-primary-foreground text-fluid-xs font-black rounded-full border-2 border-primary flex items-center justify-center shadow-glow-secondary animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-primary-foreground hover:bg-white/20"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5 text-secondary" /> : <Menu className="w-5 h-5 text-secondary" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scalloped Edge - Luxury "Toasted" Scallops */}
            <div className="relative h-6 mt-[-1px] pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 z-10 shadow-brand-md"
                    style={{
                        backgroundColor: 'hsl(var(--primary))',
                        maskImage: 'radial-gradient(circle at 50% 0, black 10px, transparent 11px)',
                        maskSize: '28px 24px',
                        WebkitMaskImage: 'radial-gradient(circle at 50% 0, black 10px, transparent 11px)',
                        WebkitMaskSize: '28px 24px',
                    }}
                />

                {/* Premium Gold Thread - Refined and Glowing */}
                <div className="absolute top-[-1px] left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-secondary to-transparent z-20 shadow-glow-primary" />
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden bg-background border-b border-border shadow-brand-xl relative overflow-hidden"
                    >
                        {/* Mobile Pattern Background */}
                        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
                            <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#header-diamond-pattern)" /></svg>
                        </div>

                        <div className="flex justify-center pt-6 pb-2 relative z-10">
                            <LanguageSwitcher />
                        </div>

                        <nav className="flex flex-col p-6 space-y-6 relative z-10 text-center">
                            {navItems.map((key) => (
                                <Link
                                    key={key}
                                    href={key === 'home' ? '/' : `/${key}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-serif text-3xl font-extrabold text-foreground hover:text-primary transition-all active:scale-90"
                                >
                                    {t(key)}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
