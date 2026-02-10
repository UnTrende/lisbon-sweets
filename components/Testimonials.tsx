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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

interface Testimonial {
    id: number;
    name: string;
    rating: number;
    comment: string;
    avatar: string;
    role?: string;
}

// Mock data - Replace with database fetch in production
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sofia Martins",
        rating: 5,
        comment: "The Pastel de Nata Cake was absolutely divine! It brought back memories of my grandmother's kitchen. Perfect for our anniversary celebration.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
        role: "Wedding Anniversary"
    },
    {
        id: 2,
        name: "João Silva",
        rating: 5,
        comment: "Incredible craftsmanship! The custom cake we ordered was not only beautiful but tasted amazing. Every guest asked where we got it from!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
        role: "Birthday Party"
    },
    {
        id: 3,
        name: "Maria Costa",
        rating: 4.5,
        comment: "The Sintra Forest cake is a masterpiece. Rich chocolate and cherry - a perfect combination. Will definitely order again!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
        role: "Corporate Event"
    },
    {
        id: 4,
        name: "Pedro Almeida",
        rating: 5,
        comment: "Best cake in Lisbon, hands down. The attention to detail and authentic Portuguese flavors make this bakery truly special.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
        role: "Regular Customer"
    },
    {
        id: 5,
        name: "Ana Rodrigues",
        rating: 5,
        comment: "Ordered a custom wedding cake and it exceeded all expectations. The team was professional, creative, and the cake was stunning!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
        role: "Wedding"
    },
    {
        id: 6,
        name: "Ricardo Fernandes",
        rating: 4.5,
        comment: "The Algarve Almond cake is perfection. You can taste the quality ingredients in every bite. Highly recommended!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo",
        role: "Family Gathering"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-background/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-script text-fluid-3xl text-secondary block mb-2">What Our Customers Say</span>
                    <h2 className="font-serif text-fluid-6xl text-primary font-bold mb-6">
                        Sweet Testimonials
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-sans text-fluid-lg">
                        Join hundreds of satisfied customers who have experienced our artisanal creations.
                    </p>
                </motion.div>

                <Carousel className="w-full max-w-6xl mx-auto">
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="p-2 h-full"
                                >
                                    <Card className="border-none bg-card shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl h-full flex flex-col">
                                        <CardContent className="p-8 flex flex-col h-full">
                                            {/* Quote Icon */}
                                            <div className="mb-6">
                                                <Quote className="w-10 h-10 text-secondary/30" />
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-4">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(testimonial.rating)
                                                                ? 'fill-secondary text-secondary'
                                                                : i < testimonial.rating
                                                                    ? 'fill-secondary/50 text-secondary/50'
                                                                    : 'fill-muted text-muted'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="ml-2 text-fluid-sm font-bold text-primary">
                                                    {testimonial.rating.toFixed(1)}
                                                </span>
                                            </div>

                                            {/* Comment */}
                                            <p className="text-muted-foreground font-sans leading-relaxed mb-6 flex-grow">
                                                "{testimonial.comment}"
                                            </p>

                                            {/* Author Info */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                                <Avatar className="w-12 h-12 border-2 border-secondary/20">
                                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-serif font-bold text-primary">
                                                        {testimonial.name}
                                                    </div>
                                                    {testimonial.role && (
                                                        <div className="text-fluid-xs text-muted-foreground uppercase tracking-wider">
                                                            {testimonial.role}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 size-12 border-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" />
                    <CarouselNext className="hidden md:flex -right-12 size-12 border-primary/10 text-primary hover:bg-primary hover:text-white transition-colors" />
                </Carousel>
            </div>

            {/* Visual Flair */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -mr-48 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -ml-48 pointer-events-none" />
        </section>
    );
}
