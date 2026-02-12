'use client';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AzulejosPattern } from '@/components/AzulejosPattern';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { clearCart } from '@/lib/features/cartSlice';
import Link from 'next/link';

export default function CheckoutPage() {
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    // Simple total calculation without tax complexity for now
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOrderPlaced(true);
        dispatch(clearCart());
    };

    if (isOrderPlaced) {
        return (
            <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <AzulejosPattern className="opacity-10" />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 max-w-md w-full bg-card p-8 rounded-2xl shadow-xl border border-border/50"
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">📨</span>
                    </div>
                    <h1 className="font-serif text-3xl text-primary font-bold mb-4">Request Sent!</h1>
                    <p className="text-muted-foreground mb-8">
                        We have received your order details. We will contact you shortly via phone/WhatsApp to confirm delivery and payment.
                    </p>
                    <Link href="/">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Back to Home
                        </Button>
                    </Link>
                </motion.div>
            </main>
        );
    }

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-background py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="font-serif text-3xl text-primary mb-4">Your Cart is Empty</h1>
                    <Link href="/gallery">
                        <Button variant="link">Browse our Sweets</Button>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background py-12 px-4 relative">
            <div className="container mx-auto max-w-4xl relative z-10">
                <h1 className="font-serif text-4xl text-primary font-bold mb-8 text-center">Complete Your Request</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Simplified Form Section */}
                    <div className="space-y-6">
                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="font-serif text-xl">Your Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Name</Label>
                                    <Input id="fullName" placeholder="Your Full Name" className="h-12 bg-muted/20" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Number (WhatsApp/Phone)</Label>
                                    <Input id="phone" type="tel" placeholder="+351 ..." className="h-12 bg-muted/20" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Delivery Address</Label>
                                    <Input id="address" placeholder="Full Address" className="h-12 bg-muted/20" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notes (Optional)</Label>
                                    <Input id="notes" placeholder="Any special instructions..." className="h-12 bg-muted/20" />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 text-sm text-muted-foreground flex items-center gap-3">
                            <span className="text-2xl">ℹ️</span>
                            <p>No payment is required now. You can pay via cash or MBWAY upon delivery.</p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <Card className="border-none shadow-lg sticky top-24 bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="font-serif text-xl">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between text-sm py-2 border-b border-border/50 last:border-0">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-foreground">{item.name}</span>
                                                {item.options && (
                                                    <span className="text-xs text-muted-foreground">
                                                        {item.options.size} • {item.options.flavor}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <span className="block font-medium">€{(item.price * item.quantity).toFixed(2)}</span>
                                                <span className="text-xs text-muted-foreground">x{item.quantity}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Separator />

                                <div className="flex justify-between pt-2 text-xl font-bold text-primary">
                                    <span>Total Estimate</span>
                                    <span>€{total.toFixed(2)}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handlePlaceOrder} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg rounded-xl shadow-md transition-transform hover:scale-[1.02]">
                                    Send Order Request
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
