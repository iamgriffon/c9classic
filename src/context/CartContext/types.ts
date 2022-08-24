import { ReactNode } from "react";

export interface CartContextProps {
  children: ReactNode;
}

export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  amount: number;
}

export type CartContextData = {
  cart: CartItem[];
  addToCart: (param: CartItem) => void;
  removeFromCart: (param: CartItem) => void;
}