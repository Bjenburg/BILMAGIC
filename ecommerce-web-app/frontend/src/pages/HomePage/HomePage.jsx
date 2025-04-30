import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import DealsSection from '../../components/Deals/DealsSection'; // Import DealsSection
import './HomePage.scss';

const HomePage = () => {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const topSellerCues = [
        {
            _id: '1',
            name: 'Professional Billiard Cue',
            price: 299.99,
            description: 'Tournament-grade billiard cue with carrying case',
            imageUrl: 'https://endpoint.ph/cdn/shop/products/Z1_1200x1200.png?v=1615793705'
        },
        {
            _id: '2',
            name: 'Premium Break Cue',
            price: 249.99,
            description: 'Professional break cue with power shaft',
            imageUrl: 'https://down-ph.img.susercontent.com/file/ph-11134207-7rasm-m1dry5fyebr38f'
        },
        {
            _id: '3',
            name: 'Classic Pool Stick',
            price: 179.99,
            description: 'Traditional design with maple shaft',
            imageUrl: 'http://www.pericues-int.com/product/img/P-T01%20Dracula-02.jpg'
        },
        {
            _id: '4',
            name: 'Carbon Fiber Cue',
            price: 399.99,
            description: 'High-tech carbon fiber construction',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        },
        {
            _id: '5',
            name: 'Custom Jump Cue',
            price: 219.99,
            description: 'Specialized jump cue with quick-release joint',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        }
    ];

    const newArrivals = [
        {
            _id: '6',
            name: 'Limited Edition Cue',
            price: 449.99,
            description: 'Collector\'s edition with unique inlays',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        },
        {
            _id: '7',
            name: 'Performance Shaft',
            price: 289.99,
            description: 'Low-deflection technology shaft',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        },
        {
            _id: '8',
            name: 'Pro Series Cue',
            price: 329.99,
            description: 'Tournament player endorsed cue',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        },
        {
            _id: '9',
            name: 'Signature Series Cue',
            price: 379.99,
            description: 'Champion player signature model',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        },
        {
            _id: '10',
            name: 'Elite Playing Cue',
            price: 459.99,
            description: 'Premium grade wood with custom wrap',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnV3Ra3CtAK9kEvuHBWmP7rB4XbgvL3-Ug&s'
        }
    ];

    return (
        <>
            <div className="home-page">
                <Carousel />
                <DealsSection /> {/* Add DealsSection here */}
                <div className="content-wrapper">
                    <h1>Welcome to BILMAGIC Store</h1>

                    <section className="product-section">
                        <h2>Top Seller Cues</h2>
                        <div className="product-list">
                            {topSellerCues.map(product => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                    onClick={() => handleProductClick(product._id)}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>New Arrivals</h2>
                        <div className="product-list">
                            {newArrivals.map(product => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                    onClick={() => handleProductClick(product._id)}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;

