'use client';

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star } from "lucide-react"
import { useAppDispatch } from "@/lib/hooks"
import { addItem } from "@/lib/features/cartSlice"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from 'next-intl';

const featured = [
    {
        id: 1,
        nameKey: "pastelDeNata",
        price: "€35.00",
        image: "https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 2,
        nameKey: "sintraForest",
        price: "€42.00",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 3,
        nameKey: "algarveAlmond",
        price: "€28.00",
        image: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 4,
        nameKey: "royalRedVelvet",
        price: "€45.00",
        image: "https://images.unsplash.com/photo-1586788680434-30d324671b6c?auto=format&fit=crop&q=80&w=800",
        rating: 5.0
    },
]

export function FeaturedProducts() {
    const dispatch = useAppDispatch();
    const t = useTranslations('products');
    const tProd = useTranslations('products.names');

    // Helper to get translated name
    const getProductName = (key: string) => {
        // Fallback if key doesn't exist
        try {
            return tProd(key);
        } catch {
            return key;
        }
    };

    interface FeaturedProduct {
        id: number;
        nameKey: string;
        price: string;
        image: string;
        rating: number;
    }

    const handleAddToCart = (item: FeaturedProduct) => {
        dispatch(addItem({
            id: item.id.toString(),
            name: getProductName(item.nameKey),
            price: parseFloat(item.price.replace('€', '')),
            image: item.image,
            quantity: 1
        }));
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-script text-3xl text-secondary block mb-2">{t('featured')}</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary font-bold">{t('featuredTitle')}</h2>
                    </div>
                    <Link href="/gallery">
                        <Button variant="outline" className="text-primary border-primary/20 rounded-full px-8 py-6 hover:bg-primary/5 hidden md:flex font-bold uppercase tracking-widest text-fluid-xs">
                            {t('viewCollection')}
                        </Button>
                    </Link>
                </div>

                <Carousel className="w-full max-w-6xl mx-auto">
                    <CarouselContent className="-ml-4">
                        {featured.map((product) => (
                            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-2">
                                    <Card className="group border-none transition-all duration-700 bg-card overflow-hidden rounded-[2.5rem]">
                                        <CardContent className="p-0">
                                            <div className="aspect-[4/5] relative overflow-hidden bg-muted/20">
                                                <Image
                                                    src={product.image}
                                                    alt={getProductName(product.nameKey)}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="absolute top-6 right-6 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg">
                                                    <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                                                    <span className="text-xs font-black text-primary">{product.rating}</span>
                                                </div>
                                            </div>

                                            <div className="p-8">
                                                <h3 className="font-serif text-3xl text-primary mb-3 font-bold line-clamp-1">{getProductName(product.nameKey)}</h3>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-serif text-2xl font-black text-secondary">{product.price}</span>
                                                    <Button
                                                        onClick={() => handleAddToCart(product)}
                                                        className="rounded-full w-14 h-14 p-0 bg-primary hover:bg-secondary transition-all duration-500 shadow-lg hover:shadow-secondary/40"
                                                    >
                                                        <ShoppingBag className="w-6 h-6" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 size-12 border-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" />
                    <CarouselNext className="hidden md:flex -right-12 size-12 border-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" />
                </Carousel>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/gallery">
                        <Button variant="outline" className="text-primary border-primary/20 rounded-full px-10 py-8 font-bold uppercase tracking-widest text-fluid-sm">
                            {t('viewCollection')}
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />
        </section>
    )
}
