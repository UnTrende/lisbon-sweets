'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';


export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: 'pt' | 'en') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
            <button
                onClick={() => handleLocaleChange('pt')}
                className={cn(
                    "w-8 h-8 rounded-full overflow-hidden transition-all duration-300 relative group",
                    locale === 'pt'
                        ? "ring-2 ring-secondary ring-offset-2 ring-offset-background scale-110 shadow-glow-secondary grayscale-0"
                        : "opacity-70 hover:opacity-100 hover:scale-105 grayscale"
                )}
                aria-label="Mudar para Português"
                title="Português"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <g fillRule="evenodd">
                        <path fill="#f00" d="M213.333 0H640v480H213.333z" />
                        <path fill="#006600" d="M0 0h213.333v480H0z" />
                        <path fill="#ff0" d="M213.333 158.667c33.333 0 66.667 16.666 66.667 50 0 33.333 0 66.666-33.334 100-33.333 33.333-33.333 66.667-33.333 100h-33.333c0-33.333 0-66.667-33.333-100-33.334-33.334-33.334-66.667-33.334-100 0-33.334 33.334-50 66.667-50" />
                        <circle cx="213.333" cy="240" r="16.667" fill="#fff" />
                        <path fill="#000099" d="M213.333 223.333v33.334M196.667 240h33.333" />
                    </g>
                </svg>
            </button>

            <div className="w-px h-4 bg-white/30" />

            <button
                onClick={() => handleLocaleChange('en')}
                className={cn(
                    "w-8 h-8 rounded-full overflow-hidden transition-all duration-300 relative group",
                    locale === 'en'
                        ? "ring-2 ring-secondary ring-offset-2 ring-offset-background scale-110 shadow-glow-secondary grayscale-0"
                        : "opacity-70 hover:opacity-100 hover:scale-105 grayscale"
                )}
                aria-label="Switch to English"
                title="English"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <path fill="#012169" d="M0 0h640v480H0z" />
                    <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
                    <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176-6-35L20 0H0z" />
                    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
                    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
                </svg>
            </button>
        </div>
    );
}
