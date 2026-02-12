'use client';

import { useState } from 'react';
import { AzulejosPattern } from '@/components/AzulejosPattern';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutContent() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const t = useTranslations('about');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <main className="min-h-screen bg-background relative pb-20">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <AzulejosPattern className="opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl md:text-7xl text-primary font-bold mb-6"
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-secondary font-sans font-medium tracking-wide uppercase"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* The Story */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] bg-muted/20 rounded-2xl relative overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/artisanal_bakery_kitchen_1770492239459.png"
                            alt="The Baker's Kitchen"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="font-serif text-4xl text-primary font-bold">{t('storyTitle')}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                            {t('storyP1')}
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                            {t('storyP2')}
                        </p>
                        <div className="pt-4">
                            <div className="font-script text-3xl text-secondary">{t('founders')}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{t('role')}</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-muted/30 py-20 relative">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl text-primary font-bold mb-4">{t('contactTitle')}</h2>
                        <p className="text-muted-foreground">{t('contactDesc')}</p>
                    </div>

                    <Card className="border-none shadow-xl bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-4xl">✓</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-primary font-bold mb-2">{t('form.successTitle')}</h3>
                                    <p className="text-muted-foreground">{t('form.successDesc')}</p>
                                </motion.div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">{t('form.name')}</label>
                                            <Input placeholder={t('form.placeholderName')} className="bg-white/50" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">{t('form.email')}</label>
                                            <Input type="email" placeholder={t('form.placeholderEmail')} className="bg-white/50" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('form.message')}</label>
                                        <Textarea placeholder={t('form.placeholderMessage')} className="min-h-[150px] bg-white/50" required />
                                    </div>
                                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full">
                                        {t('form.submit')}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}
