import React, { useState } from 'react';
import './CartPage.scss';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Luxury Skincare Set',
            price: 89.99,
            quantity: 1,
            imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80'
        },
        {
            id: 2,
            name: 'Professional Billiard Cue',
            price: 299.99,
            quantity: 2,
            imageUrl: 'https://ph-test-11.slatic.net/p/c6a4397a7b965bed7dfcd11b5379107f.jpg'
        }
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} className="cart-item__image" />
                            <div className="cart-item__details">
                                <h2 className="cart-item__name">{item.name}</h2>
                                <p className="cart-item__price">${item.price.toFixed(2)}</p>
                                <div className="cart-item__quantity">
                                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                </div>
                                <button
                                    className="cart-item__remove"
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: ${calculateTotal()}</h3>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <p className="empty-cart">Your cart is empty</p>
            )}
        </div>
    );
};

export default CartPage;