'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleCart, removeItem } from '@/lib/features/cartSlice';
import { Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function CartSheet() {
    const { isOpen, items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <Sheet open={isOpen} onOpenChange={() => dispatch(toggleCart())}>
            <SheetContent className="w-full sm:max-w-md flex flex-col bg-background p-0">
                <SheetHeader className="p-6 border-b border-border/50">
                    <SheetTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        Your Selection
                    </SheetTitle>
                </SheetHeader>

                <ScrollArea className="flex-1 px-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground">
                            <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                            <p className="font-sans">Your cart is empty.</p>
                            <Button
                                variant="link"
                                onClick={() => dispatch(toggleCart())}
                                className="text-primary mt-2"
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="py-6 space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-20 h-20 bg-muted/30 rounded-lg overflow-hidden shrink-0 border border-border/20">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-foreground line-clamp-1">{item.name}</h4>
                                        {item.options && (
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {item.options.size}, {item.options.flavor}
                                            </p>
                                        )}
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm font-bold text-secondary">
                                                {item.quantity} x €{item.price.toFixed(2)}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                onClick={() => dispatch(removeItem(item.id))}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ScrollArea>

                {items.length > 0 && (
                    <div className="p-6 bg-muted/10 border-t border-border/50 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-serif text-xl font-bold text-primary">€{total.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <Link href="/checkout" onClick={() => dispatch(toggleCart())}>
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-full shadow-lg">
                                Finalize Order
                            </Button>
                        </Link>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
