'use client';

import { useState } from 'react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { AzulejosPattern } from '@/components/AzulejosPattern';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const categoryKeys = ["all", "celebration", "wedding", "everyday", "seasonal"];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const t = useTranslations('gallery');
    const tProd = useTranslations('products.names');

    // Helper to get translated product name if key exists, else fallback
    // Note: This relies on product data having 'nameKey' or similar if we updated the interface.
    // Since we didn't update lib/products.ts to have keys yet, we might need to match names.
    // However, for now, let's assume we want to translate the page shell mostly.

    // Correction: In step 163 we saw FeaturedProducts has 'nameKey'.
    // lib/products.ts was NOT updated with keys yet! I only updated FeaturedProducts local array.
    // I need to update lib/products.ts to include nameKeys or match by ID/Name to translate.
    // Since I can't easily change the Product interface everywhere in one go without breaking things,
    // I will stick to translating the page UI.

    // Wait, I should really update lib/products.ts to be robust. 
    // But for this step, let's focus on the page UI translations (title, categories).

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category.toLowerCase() === selectedCategory);

    return (
        <main className="min-h-screen bg-background relative">
            {/* Header Area */}
            <section className="relative py-24 md:py-32 overflow-hidden border-b border-secondary/10">
                <AzulejosPattern className="opacity-15" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="font-serif text-6xl md:text-7xl text-primary font-bold mb-6 drop-shadow-md"
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto font-sans text-xl leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-[74px] z-30 bg-background/90 backdrop-blur-lg py-6 border-b border-secondary/20 shadow-xl">
                <div className="container mx-auto px-4 overflow-x-auto">
                    <div className="flex justify-center min-w-max gap-3 md:gap-6">
                        {categoryKeys.map((catKey) => (
                            <Button
                                key={catKey}
                                variant={selectedCategory === catKey ? "default" : "ghost"}
                                onClick={() => setSelectedCategory(catKey)}
                                className={`rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:scale-110 ${selectedCategory === catKey
                                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(114,28,36,0.3)]'
                                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                                    }`}
                            >
                                {t(`categories.${catKey}`)}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid Area */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-24">
                        <p className="font-serif text-2xl text-muted-foreground italic">{t('noProducts')}</p>
                        <Button variant="link" onClick={() => setSelectedCategory("all")} className="mt-6 text-primary text-lg font-bold hover:scale-110 transition-transform">
                            {t('viewAll')}
                        </Button>
                    </div>
                )}
            </section>
        </main>
    );
}
