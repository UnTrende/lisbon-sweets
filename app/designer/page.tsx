import { CakeBuilder } from '@/components/CakeBuilder';
import { AzulejosPattern } from '@/components/AzulejosPattern';

export default function DesignerPage() {
    return (
        <main className="min-h-screen bg-background relative pb-20">
            <section className="relative py-20 overflow-hidden mb-8">
                <AzulejosPattern className="opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold mb-4">
                        Design Your Dream Cake
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-sans text-lg">
                        Create a custom masterpiece for your special occasion. Choose your shape, flavors, and personal touches.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <CakeBuilder />
            </section>
        </main>
    );
}
