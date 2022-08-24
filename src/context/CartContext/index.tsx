import React, { createContext, useContext, useState } from 'react';
import { CartContextData, CartContextProps, CartItem } from './types';

const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProps) {
  
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(newItem: CartItem) {
    var newCart: CartItem[] = cart;
    if (cart.some(item => item.id === newItem.id)) {
      newCart.map(item => item.id === newItem.id ? item.amount++ : item);
      setCart(newCart);
      console.log('Added existing item', cart)
    } else {
      newCart.push(newItem);
      setCart(newCart);
      console.log('Added new item', cart)
    }
  };

  function removeFromCart(cartItem: CartItem) {
    const newCart: CartItem[] = cart;
    if (newCart.some(item => item.id === cartItem.id && item.amount === 1)) {
      newCart.filter(item => item !== cartItem);
      setCart(newCart)
      console.log('Removed item (amount -1)', cart);
    } else {
      newCart.map(item => item.id === cartItem.id ? item.amount-- : item);
      setCart(newCart)
      console.log('Removed item from', cart);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);