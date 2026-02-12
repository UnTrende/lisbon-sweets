'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from 'next-intl';


const flavors = [
    { nameKey: "classicVanilla", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=400" },
    { nameKey: "richChocolate", image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=400" },
    { nameKey: "zestyLemon", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=400" },
    { nameKey: "redVelvet", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=400" },
    { nameKey: "portWine", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=400" },
    { nameKey: "almondHoney", image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=400" },
];

export function FlavorPalette() {
    const t = useTranslations('flavorPalette');
    const tFlavors = useTranslations('flavorPalette.flavors');

    return (
        <section className="py-24 bg-background/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-script text-fluid-3xl text-secondary block mb-2">{t('subtitle')}</span>
                    <h2 className="font-serif text-fluid-6xl text-primary font-bold mb-6">{t('title')}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-sans text-fluid-lg">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {flavors.map((flavor, index) => (
                        <motion.div
                            key={flavor.nameKey}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="h-full"
                        >
                            <Card className="transition-all duration-700 cursor-pointer border-none overflow-hidden group rounded-[2.5rem] bg-card h-full">
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="h-80 w-full overflow-hidden relative">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={flavor.image}
                                                alt={tFlavors(flavor.nameKey)}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="p-8 text-center bg-card flex-1 flex flex-col justify-center border-t border-secondary/10">
                                        <span className="font-script text-fluid-2xl text-secondary mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">{t('signatureFlavor')}</span>
                                        <span className="font-serif font-black text-fluid-3xl text-primary group-hover:text-secondary transition-colors block">
                                            {tFlavors(flavor.nameKey)}
                                        </span>
                                        <div className="mt-4 w-12 h-0.5 bg-secondary/30 mx-auto group-hover:w-24 transition-all duration-500" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        </section>
    );
}
