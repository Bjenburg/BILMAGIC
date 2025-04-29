import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetails.scss';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showNotification, setShowNotification] = useState(false);

    // Mock product data - replace with actual data fetch
    const product = {
        _id: id,
        name: 'Duke Dracula P-T01',
        price: 260,
        oldPrice: 300,
        rating: 4.5,
        reviewCount: 450,
        description: 'Introducing the ideal PERI EARL series cues, featuring vibrant maple & point that looks designs, spliced points are structurally tight from the root making it also perfect to play with, aesthetically beautiful and artistic with Uniloc low deflection PPG shaft and radial Pro joint, leaving the players game to an entirely new level.',
        images: [
            'https://endpoint.ph/cdn/shop/products/Z1_1200x1200.png?v=1615793705',
            'https://down-ph.img.susercontent.com/file/ph-11134207-7rasm-m1dry5fyebr38f'
        ]
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (!product) return;
        
        addToCart({
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            imageUrl: product.images[selectedImage]
        });
        
        // Show notification
        setShowNotification(true);
        // Hide notification after 2 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    const handleViewSpecs = () => {
        // Implement navigation to specs section or modal
        console.log('View specifications clicked');
    };

    return (
        <div className="product-details">
            {showNotification && (
                <div className="notification">
                    Item added to cart successfully!
                </div>
            )}
            <div className="product-images">
                <img 
                    src={product.images[selectedImage]} 
                    alt={product.name} 
                    className="main-image" 
                />
                <div className="thumbnail-images">
                    {product.images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`${product.name} view ${index + 1}`}
                            className={selectedImage === index ? 'selected' : ''}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="product-info">
                <h1>{product.name}</h1>
                <div className="rating">
                    <div className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="review-count">{product.reviewCount} Reviews</span>
                </div>

                <div className="price-container">
                    <span className="current-price">${product.price}</span>
                    {product.oldPrice && (
                        <span className="old-price">${product.oldPrice}</span>
                    )}
                </div>

                <p className="description">{product.description}</p>

                <div className="actions">
                    <div className="quantity-selector">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <div className="action-buttons">
                        <button className="add-to-cart" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <button className="view-specs" onClick={handleViewSpecs}>
                            View Specifications
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;