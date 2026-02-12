import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItemOptions {
    size?: string;
    flavor?: string;
    customization?: string;
    [key: string]: string | undefined;
}

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    options?: CartItemOptions;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        addItem: (state, action: PayloadAction<CartItem>) => {
            // For custom items with options, check if options match
            const existing = state.items.find(i => {
                if (i.id === action.payload.id) {
                    // If both have options, compare them
                    if (i.options && action.payload.options) {
                        return JSON.stringify(i.options) === JSON.stringify(action.payload.options);
                    }
                    // If neither have options, it's a match
                    return !i.options && !action.payload.options;
                }
                return false;
            });

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
})

export const { toggleCart, addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
