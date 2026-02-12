import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CakeBuilder } from '@/components/CakeBuilder';
import { AzulejosPattern } from '@/components/AzulejosPattern';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const tNav = await getTranslations({ locale, namespace: 'nav' });
    const tDesigner = await getTranslations({ locale, namespace: 'designer' });

    return {
        title: tNav('designer'),
        description: tDesigner('metaDescription'),
        openGraph: {
            title: tNav('designer'),
            description: tDesigner('metaDescription'),
            type: 'website',
            locale: locale,
        },
    };
}

async function DesignerContent({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'designer' });

    return (
        <main className="min-h-screen bg-background relative pb-20">
            <section className="relative py-20 overflow-hidden mb-8">
                <AzulejosPattern className="opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-sans text-lg">
                        {t('description')}
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <CakeBuilder />
            </section>
        </main>
    );
}

export default async function DesignerPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    return <DesignerContent locale={locale} />;
}
