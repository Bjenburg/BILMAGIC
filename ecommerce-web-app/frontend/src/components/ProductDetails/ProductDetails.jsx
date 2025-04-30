import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi'; // Add this import
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
            'http://www.pericues-int.com/product/img/P-T01%20Dracula-02.jpg',
            'http://www.pericues-int.com/product/img/P-T01%20Dracula-02.jpg'
        ],
        reviews: [
            {
                id: 1,
                author: 'Samantha D.',
                verified: true,
                rating: 4.5,
                date: 'August 14, 2023',
                content: 'I absolutely love this cue! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Perfect weight distribution and smooth performance.'
            },
            {
                id: 2,
                author: 'Alex H.',
                verified: true,
                rating: 4,
                date: 'August 15, 2023',
                content: 'The cue exceeded my expectations! The colors are vibrant and the joint quality is top-notch. Being a UK US delegate myself, I\'m quite particular about quality, and this cue definitely got a thumbs up from me.'
            },
            {
                id: 3,
                author: 'Ethan K.',
                verified: true,
                rating: 4,
                date: 'August 15, 2023',
                content: 'This cue is a must-have for anyone who appreciates good design. The workmanship and striking pattern caught my eye, and the fit is perfect. I just love the designer\'s touch in every aspect of this piece.'
            }
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
        navigate(`/product/${id}/specifications`);
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

            <div className="reviews-section">
                <div className="reviews-header">
                    <h2>Rating & Reviews</h2>
                    <div className="reviews-controls">
                        <button className="filter-button">
                            <FiFilter /> Latest
                        </button>
                        <button className="write-review-btn">
                            Write a Review
                        </button>
                    </div>
                </div>
                <div className="reviews-container">
                    {product.reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <button className="more-options">•••</button>
                            <div className="reviewer-info">
                                <h3>
                                    {review.author}
                                    {review.verified && <span className="verified-badge">✓</span>}
                                </h3>
                            </div>
                            <div className="stars">
                                {'★'.repeat(Math.floor(review.rating))}
                                {'☆'.repeat(5 - Math.floor(review.rating))}
                            </div>
                            <p className="review-content">{review.content}</p>
                            <div className="review-date">Posted on {review.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;