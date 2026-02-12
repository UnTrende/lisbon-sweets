import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import GalleryContent from '@/components/GalleryContent';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'gallery' });

    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            locale: locale,
        },
    };
}

export default function GalleryPage() {
    return <GalleryContent />;
}
