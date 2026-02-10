'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { AzulejosPattern } from './AzulejosPattern';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navigation = {
        shop: [
            { name: 'Gallery', href: '/gallery' },
            { name: 'Custom Designer', href: '/designer' },
            { name: 'Featured Creations', href: '/#featured' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Our Story', href: '/about#story' },
            { name: 'Contact', href: '/about#contact' },
        ],
        categories: [
            { name: 'Celebration Cakes', href: '/gallery?category=celebration' },
            { name: 'Wedding Cakes', href: '/gallery?category=wedding' },
            { name: 'Everyday Treats', href: '/gallery?category=everyday' },
            { name: 'Seasonal Specials', href: '/gallery?category=seasonal' },
        ],
    };

    const socialLinks = [
        {
            name: 'Facebook',
            href: 'https://facebook.com/petalsesweets',
            icon: Facebook,
            colorClass: 'hover-facebook'
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/petalsesweets',
            icon: Instagram,
            colorClass: 'hover-instagram'
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/petalsesweets',
            icon: Twitter,
            colorClass: 'hover-twitter'
        },
    ];

    return (
        <footer className="bg-primary text-primary-foreground relative overflow-hidden mt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <AzulejosPattern />
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center text-primary font-serif font-bold text-2xl shadow-lg border-2 border-secondary/50 transition-all group-hover:scale-110 group-hover:rotate-6">
                                P
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-primary-foreground leading-none text-fluid-2xl">
                                    Petals E Sweets
                                </span>
                                <span className="font-sans text-fluid-xs tracking-[0.3em] text-secondary font-black uppercase mt-1">
                                    Patisserie & Boulangerie
                                </span>
                            </div>
                        </Link>
                        <p className="text-primary-foreground/80 mb-6 font-sans leading-relaxed max-w-md">
                            Artisanal handmade sweets and cakes crafted with love in Lisbon.
                            Bringing authentic Portuguese flavors to your celebrations since 1998.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:hello@petalsesweets.pt"
                                className="flex items-center gap-3 text-primary-foreground/90 hover:text-secondary transition-colors group"
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-sans">hello@petalsesweets.pt</span>
                            </a>
                            <a
                                href="tel:+351210123456"
                                className="flex items-center gap-3 text-primary-foreground/90 hover:text-secondary transition-colors group"
                            >
                                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-sans">+351 210 123 456</span>
                            </a>
                            <div className="flex items-start gap-3 text-primary-foreground/90">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                <span className="font-sans">
                                    Rua das Flores, 123<br />
                                    1200-195 Lisboa, Portugal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-serif text-fluid-lg font-bold mb-4 text-secondary">Shop</h3>
                        <ul className="space-y-3">
                            {navigation.shop.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="font-sans text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-serif text-fluid-lg font-bold mb-4 text-secondary">Company</h3>
                        <ul className="space-y-3">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="font-sans text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Links */}
                    <div>
                        <h3 className="font-serif text-fluid-lg font-bold mb-4 text-secondary">Categories</h3>
                        <ul className="space-y-3">
                            {navigation.categories.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="font-sans text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Bottom Bar */}
                <div className="border-t border-primary-foreground/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="font-sans text-sm text-primary-foreground/70 mr-2">Follow Us:</span>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground transition-all hover:scale-110 hover:bg-primary-foreground ${social.colorClass}`}
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="font-sans text-sm text-primary-foreground/70 flex items-center gap-2 justify-center md:justify-end">
                                © {currentYear} Petals E Sweets. Made with
                                <Heart className="w-4 h-4 fill-secondary text-secondary animate-pulse" />
                                in Lisbon
                            </p>
                        </div>
                    </div>
                </div>

                {/* SEO-friendly additional links */}
                <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/60">
                        <Link href="/privacy" className="hover:text-secondary transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-secondary transition-colors">
                            Terms of Service
                        </Link>
                        <span>•</span>
                        <Link href="/cookies" className="hover:text-secondary transition-colors">
                            Cookie Policy
                        </Link>
                        <span>•</span>
                        <Link href="/sitemap.xml" className="hover:text-secondary transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Edge */}
            <div className="h-2 bg-gradient-to-r from-secondary via-secondary/50 to-secondary" />
        </footer>
    );
}
