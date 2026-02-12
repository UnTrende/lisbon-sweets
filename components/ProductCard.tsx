'use client';

import { Product } from "@/types/product";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ShoppingBag, Eye, Star } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";
import { addItem } from "@/lib/features/cartSlice";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const dispatch = useAppDispatch();
    const t = useTranslations('products.names');
    const tCat = useTranslations('gallery.categories');
    const tCard = useTranslations('productCard');

    // Fallback to English name if key doesn't work or isn't present
    // We try/catch or just rely on next-intl returning the key if missing?
    // next-intl returns key path if missing by default unless configured otherwise.
    // Ideally check if nameKey exists.
    const displayName = product.nameKey ? t(product.nameKey) : product.name;
    const categoryKey = product.category.toLowerCase();

    // For category: product.category is "Celebration", tCat expects "celebration".
    // "Celebration" -> "celebration"
    // However, if translation is missing, we might want fallback?
    // Using tCat(categoryKey)

    // We also need to fix handling of missing keys if next-intl returns "products.names.undefined" for example.

    const handleAddToCart = () => {
        dispatch(addItem({
            id: product.id,
            name: displayName,
            price: product.price,
            image: product.image,
            quantity: 1
        }));
    };

    const isPlaceholder = product.image.startsWith('bg-');

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full"
        >
            <Card className="group overflow-hidden border-none transition-all duration-500 flex flex-col h-full bg-card relative">
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted/30">
                    <div
                        className={cn(
                            "w-full h-full transition-all duration-1000 group-hover:scale-110 flex items-center justify-center relative",
                            isPlaceholder ? product.image : ""
                        )}
                    >
                        {!isPlaceholder ? (
                            <Image
                                src={product.image}
                                alt={displayName}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <span className="font-script text-4xl opacity-10 transform -rotate-12 select-none group-hover:opacity-20 transition-opacity">
                                {displayName}
                            </span>
                        )}

                        {/* Premium Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Quick View Button on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <Button variant="secondary" size="sm" className="rounded-full gap-2 shadow-xl bg-white/90 backdrop-blur-md text-primary border-none hover:bg-white">
                                <Eye className="w-4 h-4" />
                                {tCard('quickView')}
                            </Button>
                        </div>
                    </div>

                    {/* Category & Badge */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md shadow-brand-md border-none px-3 py-1 font-sans text-fluid-xs uppercase tracking-widest font-black">
                            {/* Use translated category if available, else original */}
                            {categoryKey ? tCat(categoryKey) : product.category}
                        </Badge>
                        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow-sm">
                            <Star className="w-3 h-3 fill-secondary text-secondary" />
                            <span className="text-fluid-xs font-bold text-primary">{product.rating}</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <CardHeader className="p-5 pb-2">
                    <div className="flex flex-col gap-1">
                        <CardTitle className="font-serif text-fluid-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-tight">
                            {displayName}
                        </CardTitle>
                        <span className="font-sans text-fluid-xs font-bold uppercase tracking-[0.2em] text-secondary opacity-80">
                            {product.flavor}
                        </span>
                    </div>
                </CardHeader>

                <CardContent className="px-5 py-2">
                    <p className="text-fluid-sm text-muted-foreground font-sans line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>
                </CardContent>

                <CardFooter className="px-5 py-5 mt-auto flex flex-col gap-4">
                    <div className="w-full flex justify-between items-end">
                        <div className="flex flex-col">
                            <span className="text-fluid-xs uppercase tracking-wider text-muted-foreground font-bold">{tCard('startingFrom')}</span>
                            <span className="font-serif font-black text-fluid-2xl text-primary">
                                €{product.price.toFixed(2)}
                            </span>
                        </div>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddToCart();
                            }}
                            className="rounded-full w-12 h-12 flex items-center justify-center bg-primary hover:bg-secondary transition-all duration-500 shadow-brand-md hover:shadow-glow-secondary hover:-translate-y-1 group/btn"
                        >
                            <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        </Button>
                    </div>
                </CardFooter>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full blur-2xl -ml-8 -mb-8 pointer-events-none" />
            </Card>
        </motion.div>
    );
}
