'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AzulejosPattern } from '@/components/AzulejosPattern';
import { ShoppingBag, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/lib/hooks';
import { addItem } from '@/lib/features/cartSlice';
import { ProductCard } from '@/components/ProductCard';

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const product = products.find((p) => p.id === id);
    const dispatch = useAppDispatch();

    if (!product) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h1 className="text-2xl font-serif text-primary">Cake Not Found</h1>
                <Link href="/gallery">
                    <Button variant="link">Back to Gallery</Button>
                </Link>
            </div>
        );
    }

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const handleAddToCart = () => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        }));
    };

    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Breadcrumb / Back */}
            <div className="container mx-auto px-4 py-6">
                <Link href="/gallery" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Gallery
                </Link>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-muted/20 shadow-xl"
                >
                    <AzulejosPattern className="opacity-10" />
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col justify-center"
                >
                    <div className="flex items-center gap-2 text-secondary font-sans font-medium mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <span>{product.rating} ({product.reviews} reviews)</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-sans font-bold text-secondary">€{product.price.toFixed(2)}</span>
                        <Badge variant="outline" className="text-primary border-primary/20">{product.category}</Badge>
                    </div>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {product.description}
                        <br /><br />
                        Perfect for {product.category.toLowerCase()} moments.
                        Handcrafted with our signature {product.flavor.toLowerCase()} blend.
                    </p>

                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                            {product.allergens.map(allergen => (
                                <span key={allergen} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground uppercase tracking-wide">
                                    Contains {allergen}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Add to Cart
                            </Button>
                            <Button size="lg" variant="outline" className="flex-1 text-primary border-primary hover:bg-primary/5 text-lg py-6 rounded-full">
                                Customize Design
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl text-primary font-bold mb-8">You Might Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
