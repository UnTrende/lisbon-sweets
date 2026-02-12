'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations('error');

    useEffect(() => {
        // Log to error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center max-w-md px-4">
                <div className="mb-8">
                    <span className="text-8xl">🍰</span>
                </div>
                <h2 className="font-serif text-3xl text-primary font-bold mb-4">
                    {t('title')}
                </h2>
                <p className="text-muted-foreground mb-8">
                    {t('description')}
                </p>
                <Button onClick={reset} className="bg-primary hover:bg-primary/90">
                    {t('retry')}
                </Button>
            </div>
        </div>
    );
}
