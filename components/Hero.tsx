'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AzulejosPattern } from "./AzulejosPattern";
import { Link } from '@/lib/i18n/navigation';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-28">
            <AzulejosPattern />

            <div className="max-w-7xl relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="font-script text-fluid-4xl text-secondary mb-6 block">{t('tagline')}</span>
                    <h1 className="font-serif text-fluid-8xl font-bold text-primary mb-8 leading-[1.1]">
                        {t('title')} <br />
                        <span className="text-secondary italic">{t('titleAccent')}</span>
                    </h1>
                    <p className="font-sans text-muted-foreground text-fluid-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {t('description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                        <Link href="/designer">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary text-fluid-xl px-10 py-8 rounded-full shadow-brand-lg hover:shadow-glow-secondary transition-all duration-500">
                                {t('ctaPrimary')}
                            </Button>
                        </Link>
                        <Link href="/gallery">
                            <Button variant="outline" size="lg" className="text-primary border-primary/20 hover:bg-primary/5 text-fluid-xl px-10 py-8 rounded-full border-2">
                                {t('ctaSecondary')}
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={false}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 relative"
                >
                    <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto">
                        {/* Luxury Glows */}
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[100px] transform -translate-y-8 animate-pulse"></div>
                        <div className="absolute -inset-4 border border-secondary/20 rounded-[2rem] transform rotate-3 pointer-events-none"></div>

                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-brand-xl border-[8px] border-white transform hover:scale-[1.02] transition-transform duration-700">
                            <Image
                                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1200"
                                alt="Luxury Lisbon Patisserie"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="text-white font-script text-3xl drop-shadow-lg">Artisanal Craftsmanship</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
