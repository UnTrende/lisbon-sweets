import { AzulejosPattern } from '@/components/AzulejosPattern';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <AzulejosPattern className="opacity-5" />
            <div className="relative z-10 text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground font-sans">Loading...</p>
            </div>
        </div>
    );
}
