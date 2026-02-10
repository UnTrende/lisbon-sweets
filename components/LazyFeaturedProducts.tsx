'use client';

import dynamic from 'next/dynamic';

const FeaturedProducts = dynamic(() => import('./FeaturedProducts').then(mod => ({ default: mod.FeaturedProducts })), {
    loading: () => (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                            <div className="bg-muted/20 aspect-[4/5] rounded-[2.5rem] mb-4" />
                            <div className="h-6 bg-muted/20 rounded w-3/4 mb-2" />
                            <div className="h-4 bg-muted/20 rounded w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
    ssr: false
});

export { FeaturedProducts as LazyFeaturedProducts };
