'use client';

import { Hero } from "@/components/Hero";
import { FlavorPalette } from "@/components/FlavorPalette";
import { LazyFeaturedProducts } from "@/components/LazyFeaturedProducts";
import { LazyTestimonials } from "@/components/LazyTestimonials";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('products');

  return (
    <main className="min-h-screen">
      <Hero />

      <section id="palette" className="py-20 md:py-32 bg-background/30 backdrop-blur-[1px]">
        <div className="container mx-auto px-4">
          <FlavorPalette />
        </div>
      </section>

      <section id="featured" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-fluid-6xl text-primary font-bold mb-4 drop-shadow-sm">
              {t('featured')}
            </h2>
            <div className="w-32 h-1 bg-secondary mx-auto rounded-full shadow-glow-secondary" />
          </div>
          <LazyFeaturedProducts />
        </div>
      </section>

      <LazyTestimonials />
    </main>
  );
}
