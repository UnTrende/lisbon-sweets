'use client';

import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('./Testimonials').then(mod => ({ default: mod.Testimonials })), {
    loading: () => (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="animate-pulse">
                    <div className="h-12 bg-muted/20 rounded w-1/3 mx-auto mb-4" />
                    <div className="h-4 bg-muted/20 rounded w-1/4 mx-auto mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-muted/10 p-8 rounded-3xl">
                                <div className="h-20 bg-muted/20 rounded mb-4" />
                                <div className="h-4 bg-muted/20 rounded w-3/4 mb-2" />
                                <div className="h-4 bg-muted/20 rounded w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    ),
    ssr: false
});

export { Testimonials as LazyTestimonials };
