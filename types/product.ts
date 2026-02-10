export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Celebration' | 'Wedding' | 'Everyday' | 'Seasonal';
    flavor: string;
    image: string; // URL or placeholder class
    rating: number;
    reviews: number;
    allergens: string[];
}
