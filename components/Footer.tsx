'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AzulejosPattern } from './AzulejosPattern';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground relative overflow-hidden pt-20 pb-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rotate-12">
                    <AzulejosPattern className="w-full h-full text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 -rotate-12">
                    <AzulejosPattern className="w-full h-full text-white" />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className="font-serif font-bold text-3xl md:text-4xl tracking-tight block group-hover:scale-105 transition-transform origin-left">
                                Petals E Sweets
                            </span>
                            <span className="font-sans text-xs tracking-[0.3em] text-secondary font-black uppercase block mt-1">
                                {t('tagline')}
                            </span>
                        </Link>
                        <p className="text-primary-foreground/80 leading-relaxed font-medium">
                            {t('description')}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary"></span>
                            {t('shop')}
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/gallery" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                                    {tNav('gallery')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/designer" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                                    {tNav('designer')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">
                                    {tNav('about')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary"></span>
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <span>Rua da Prata 123,<br />1100-000 Lisboa, Portugal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+351 21 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>ol@petalsesweets.pt</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-secondary shrink-0" />
                                <span>Tue-Sun: 9am - 7pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary"></span>
                            Newsletter
                        </h3>
                        <p className="text-primary-foreground/80 mb-4 text-sm">
                            Subscribe for sweet updates and exclusive offers.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                            />
                            <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
                    <p>&copy; {currentYear} Petals E Sweets. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
                    </div>
                    <p className="flex items-center gap-1">
                        {t('madeWith')} <Heart className="w-4 h-4 fill-secondary text-secondary animate-pulse" /> {t('inLisbon')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
