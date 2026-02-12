'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ChevronRight, ChevronLeft, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppDispatch } from '@/lib/hooks';
import { addItem, type CartItemOptions } from '@/lib/features/cartSlice';

type Shape = 'Round' | 'Square' | 'Heart';
type Size = '6"' | '8"' | '10"';
type Flavor = 'Vanilla' | 'Chocolate' | 'Red Velvet' | 'Lemon';
type Filling = 'Buttercream' | 'Ganache' | 'Fruit Compote' | 'Cream Cheese';

interface CakeConfig {
    shape: Shape;
    size: Size;
    flavor: Flavor;
    filling: Filling;
    message: string;
}

const prices = {
    shape: { 'Round': 0, 'Square': 5, 'Heart': 10 },
    size: { '6"': 30, '8"': 45, '10"': 65 },
    flavor: { 'Vanilla': 0, 'Chocolate': 2, 'Red Velvet': 5, 'Lemon': 3 },
    filling: { 'Buttercream': 0, 'Ganache': 5, 'Fruit Compote': 4, 'Cream Cheese': 3 },
};

export function CakeBuilder() {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState<CakeConfig>({
        shape: 'Round',
        size: '8"',
        flavor: 'Vanilla',
        filling: 'Buttercream',
        message: '',
    });

    const dispatch = useAppDispatch();
    const totalPrice =
        prices.shape[config.shape] +
        prices.size[config.size] +
        prices.flavor[config.flavor] +
        prices.filling[config.filling];

    const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

    const handleAddToCart = () => {
        dispatch(addItem({
            id: `custom-${Date.now()}`,
            name: `Custom ${config.size} ${config.shape} Cake`,
            price: totalPrice,
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
            quantity: 1,
            options: config as unknown as CartItemOptions
        }));
    };

    const steps = [
        { id: 1, title: "Base Selection" },
        { id: 2, title: "Flavors & Fillings" },
        { id: 3, title: "Personalization" },
        { id: 4, title: "Review" }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Interactive Preview */}
            <div className="lg:sticky lg:top-32 order-2 lg:order-1">
                <div className="bg-muted/30 rounded-3xl p-8 aspect-square flex items-center justify-center relative shadow-inner">
                    <motion.div
                        layout
                        className={cn(
                            "relative shadow-2xl transition-all duration-500",
                            config.shape === 'Round' && "rounded-full",
                            config.shape === 'Square' && "rounded-2xl",
                            // Size scaling
                            config.size === '6"' && "w-48 h-48",
                            config.size === '8"' && "w-64 h-64",
                            config.size === '10"' && "w-80 h-80",
                            // Flavor colors
                            config.flavor === 'Vanilla' && 'bg-[#F3E5AB]',
                            config.flavor === 'Chocolate' && 'bg-[#5D4037]',
                            config.flavor === 'Red Velvet' && 'bg-primary',
                            config.flavor === 'Lemon' && 'bg-accent'
                        )}
                        style={{
                            clipPath: config.shape === 'Heart'
                                ? 'polygon(50% 15%, 61% 6%, 75% 6%, 86% 17%, 86% 31%, 50% 90%, 14% 31%, 14% 17%, 25% 6%, 39% 6%)'
                                : undefined,
                            borderRadius: config.shape === 'Heart' ? '0' : undefined
                        }}
                    >
                        {/* Filling Layer Visual */}
                        <div className="absolute inset-x-0 top-1/2 h-2 bg-white/50 -translate-y-1/2" />

                        {/* Message Preview */}
                        {config.message && (
                            <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                                <span
                                    className={cn(
                                        "font-script font-bold text-xl md:text-2xl drop-shadow-md",
                                        config.flavor === 'Chocolate' || config.flavor === 'Red Velvet' ? 'text-white' : 'text-primary'
                                    )}
                                >
                                    {config.message}
                                </span>
                            </div>
                        )}
                    </motion.div>
                    <div className="absolute bottom-8 text-center">
                        <p className="font-serif text-fluid-2xl text-primary font-bold">Total: €{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="order-1 lg:order-2">
                <div className="mb-8">
                    <div className="flex justify-between mb-4">
                        {steps.map((s) => (
                            <div
                                key={s.id}
                                className={cn(
                                    "text-fluid-sm font-medium transition-colors",
                                    step >= s.id ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {s.title}
                            </div>
                        ))}
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / 4) * 100}%` }}
                        />
                    </div>
                </div>

                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 md:p-8 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4">
                                        <Label className="text-fluid-lg font-serif text-primary">Shape</Label>
                                        <RadioGroup value={config.shape} onValueChange={(v) => setConfig({ ...config, shape: v as Shape })} className="grid grid-cols-3 gap-4">
                                            {['Round', 'Square', 'Heart'].map((opt) => (
                                                <div key={opt}>
                                                    <RadioGroupItem value={opt} id={opt} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={opt}
                                                        className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-muted bg-background hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                                    >
                                                        <span className="text-lg font-medium">{opt}</span>
                                                        <span className="text-xs text-muted-foreground mt-1">+€{prices.shape[opt as Shape]}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                    <div className="space-y-4">
                                        <Label className="text-fluid-lg font-serif text-primary">Size</Label>
                                        <RadioGroup value={config.size} onValueChange={(v) => setConfig({ ...config, size: v as Size })} className="grid grid-cols-3 gap-4">
                                            {['6"', '8"', '10"'].map((opt) => (
                                                <div key={opt}>
                                                    <RadioGroupItem value={opt} id={opt} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={opt}
                                                        className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-muted bg-background hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                                    >
                                                        <span className="text-lg font-medium">{opt}</span>
                                                        <span className="text-xs text-muted-foreground mt-1">€{prices.size[opt as Size]}</span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4">
                                        <Label className="text-fluid-lg font-serif text-primary">Cake Flavor</Label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon'].map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => setConfig({ ...config, flavor: opt as Flavor })}
                                                    className={cn(
                                                        "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between",
                                                        config.flavor === opt ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                                                    )}
                                                >
                                                    <span className="font-medium">{opt}</span>
                                                    {config.flavor === opt && <Check className="w-4 h-4 text-primary" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Label className="text-fluid-lg font-serif text-primary">Filling</Label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Buttercream', 'Ganache', 'Fruit Compote', 'Cream Cheese'].map((opt) => (
                                                <div
                                                    key={opt}
                                                    onClick={() => setConfig({ ...config, filling: opt as Filling })}
                                                    className={cn(
                                                        "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between",
                                                        config.filling === opt ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                                                    )}
                                                >
                                                    <span className="font-medium">{opt}</span>
                                                    {config.filling === opt && <Check className="w-4 h-4 text-primary" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4">
                                        <Label htmlFor="message" className="text-fluid-lg font-serif text-primary">Message on Cake</Label>
                                        <Input
                                            id="message"
                                            placeholder="Happy Birthday, Maria!"
                                            value={config.message}
                                            onChange={(e) => setConfig({ ...config, message: e.target.value })}
                                            maxLength={30}
                                            className="text-lg py-6"
                                        />
                                        <p className="text-sm text-muted-foreground text-right">{config.message.length}/30 characters</p>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-fluid-2xl font-serif text-primary mb-6">Summary</h3>
                                    <dl className="grid grid-cols-2 gap-4 text-sm">
                                        <dt className="text-muted-foreground">Shape & Size</dt>
                                        <dd className="font-medium text-right">{config.shape} - {config.size}</dd>

                                        <dt className="text-muted-foreground">Flavor</dt>
                                        <dd className="font-medium text-right">{config.flavor}</dd>

                                        <dt className="text-muted-foreground">Filling</dt>
                                        <dd className="font-medium text-right">{config.filling}</dd>

                                        <dt className="text-muted-foreground">Message</dt>
                                        <dd className="font-medium text-right font-script text-lg text-primary">{config.message || "(None)"}</dd>
                                    </dl>

                                    <div className="border-t border-border pt-4 mt-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold">Total Price</span>
                                            <span className="text-fluid-2xl font-bold text-primary">€{totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
                            <Button
                                variant="ghost"
                                onClick={handleBack}
                                disabled={step === 1}
                                className={cn(step === 1 && "invisible")}
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>

                            {step < 4 ? (
                                <Button onClick={handleNext} className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Next Step
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button onClick={handleAddToCart} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
