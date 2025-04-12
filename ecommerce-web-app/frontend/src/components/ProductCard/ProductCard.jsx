import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        // Add cart functionality here
        console.log('Adding to cart:', product);
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product._id}`} className="product-card__image-link">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="product-card__image" 
                />
            </Link>
            <div className="product-card__content">
                <Link to={`/product/${product._id}`} className="product-card__title-link">
                    <h3 className="product-card__title">{product.name}</h3>
                </Link>
                <p className="product-card__price">${product.price.toFixed(2)}</p>
                <p className="product-card__description">{product.description}</p>
                <button 
                    className="product-card__button"
                    onClick={handleAddToCart}
                    aria-label={`Add ${product.name} to cart`}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;