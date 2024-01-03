import { ReactNode, createContext, useState } from "react";

import ShoppingCart from "../components/ShoppingCart";

import useLocalStorage from "../hooks/useLocalStorage";

type ContextType = {

    getItemQuantity: (id: number) => number;

    increaseItemQuantity: (id: number) => void;

    decreaseItemQuantity: (id: number) => void;

    removeFromCart: (id: number) => void;

    cartItems: CartItem[];
    
    cartQuantity: number;

    openCart: () => void;

    closeCart: () => void;

}

type ShoppingCartContextProps = {

    children: ReactNode;

}

export type CartItem = {

    id: number;

    quantity: number;

}

export const Context = createContext({} as ContextType);

const ShoppingCartContext = ({ children }: ShoppingCartContextProps) => {

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartItems", []);

    const [isOpen, setIsOpen] = useState(false);

    const getItemQuantity = (id: number) => {

        return cartItems.find(cartItem => cartItem.id === id)?.quantity || 0;

    }

    const increaseItemQuantity = (id: number) => {

        setCartItems(currentItems => {

            if (currentItems.find(currentItem => currentItem.id === id) === undefined) {

                return [...currentItems, { id, quantity: 1 }];

            } else {

                return currentItems.map(currentItem => {

                    if (currentItem.id === id) {

                        return {...currentItem, quantity: currentItem.quantity + 1}

                    } else {

                        return currentItem;

                    }

                })

            }

        });

    }

    const decreaseItemQuantity = (id: number) => {

        setCartItems(currentItems => {

            if (currentItems.find(currentItem => currentItem.id === id)?.quantity === 1) {

                return currentItems.filter(currentItem => currentItem.id !== id);

            } else {

                return currentItems.map(currentItem => {

                    if (currentItem.id === id) {

                        return {...currentItem, quantity: currentItem.quantity - 1}

                    } else {

                        return currentItem;

                    }

                })

            }

        });

    }

    const removeFromCart = (id: number) => {

        setCartItems(currentItems => {

            return currentItems.filter(item => item.id !== id);

        });

    }

    const cartQuantity = cartItems.reduce((quantity, currentItem) => {

        return quantity + currentItem.quantity;

    }, 0);

    const openCart = () => setIsOpen(true);

    const closeCart = () => setIsOpen(false);

  return (

    <Context.Provider value={{

        getItemQuantity,

        increaseItemQuantity,

        decreaseItemQuantity,

        removeFromCart,

        cartItems,

        cartQuantity,

        openCart,

        closeCart

    }}>

        { children }

        <ShoppingCart isOpen={ isOpen } />

    </Context.Provider>

  );

}

export default ShoppingCartContext;
