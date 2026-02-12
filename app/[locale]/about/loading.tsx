import { Skeleton } from "@/components/ui/skeleton";
import { AzulejosPattern } from '@/components/AzulejosPattern';

export default function Loading() {
    return (
        <div className="min-h-screen bg-background relative pb-20">
            <section className="relative py-24 overflow-hidden">
                <AzulejosPattern className="opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
                    <Skeleton className="h-16 w-3/4 max-w-lg mx-auto" />
                    <Skeleton className="h-8 w-1/2 max-w-md mx-auto" />
                </div>
            </section>

            <section className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <Skeleton className="aspect-[4/5] rounded-2xl w-full" />
                    <div className="space-y-6">
                        <Skeleton className="h-10 w-64" />
                        <Skeleton className="h-32 w-full" />
                        <Skeleton className="h-32 w-full" />
                        <div className="pt-4 space-y-2">
                            <Skeleton className="h-8 w-48" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
