import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Button } from '@/components/ui/button';
import { AzulejosPattern } from '@/components/AzulejosPattern';

export default function NotFound() {
    const t = useTranslations('error');

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden">
            <AzulejosPattern className="opacity-5" />
            <div className="relative z-10 text-center px-4 max-w-md">
                <h1 className="font-serif text-8xl font-bold text-primary mb-2">404</h1>
                <h2 className="font-serif text-3xl text-secondary mb-6">{t('notFoundTitle') || "Page Not Found"}</h2>
                <p className="font-sans text-muted-foreground mb-8">
                    {t('notFoundDescription') || "The page you are looking for does not exist or has been moved."}
                </p>
                <Link href="/">
                    <Button className="bg-primary text-primary-foreground hover:bg-secondary hover:text-primary transition-colors rounded-full px-8">
                        {t('home') || "Go Home"}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
