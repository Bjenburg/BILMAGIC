import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ product, onClick }) => {
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => {
        console.error('Image failed to load:', product.imageUrl);
        setImageError(true);
    };

    return (
        <div className="product-card" onClick={onClick} role="button" tabIndex={0}>
            <div className="image-container">
                <img 
                    src={product.imageUrl || 'https://m.media-amazon.com/images/I/71EOF5-UrBL._AC_SL1500_.jpg'}
                    alt={product.name}
                    onError={handleImageError}
                />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="price">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ProductCard;