import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product._id);
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product._id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            }

            return [...prevItems, {
                id: product._id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                imageUrl: product.imageUrl
            }];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);