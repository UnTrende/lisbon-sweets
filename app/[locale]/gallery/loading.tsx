import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16 space-y-4">
                <Skeleton className="h-8 w-48 mx-auto" />
                <Skeleton className="h-12 w-96 mx-auto" />
                <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-card rounded-3xl overflow-hidden shadow-sm h-full flex flex-col">
                        <Skeleton className="w-full aspect-square" />
                        <div className="p-6 space-y-4">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                            <div className="flex justify-between items-center pt-4">
                                <Skeleton className="h-6 w-20" />
                                <Skeleton className="h-10 w-32 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
