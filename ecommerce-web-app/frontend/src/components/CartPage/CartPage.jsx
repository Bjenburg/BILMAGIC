import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartPage.scss';

const CartPage = () => {
    const { cartItems, setCartItems } = useCart();

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