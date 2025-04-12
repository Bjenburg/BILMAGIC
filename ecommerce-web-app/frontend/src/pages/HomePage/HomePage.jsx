import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import DealsSection from '../../components/Deals/DealsSection'; // Update this import
import './HomePage.scss';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Number of products per page

    const mockProducts = [
        {
            _id: '1',
            name: 'Luxury Skincare Set',
            price: 89.99,
            description: 'Premium skincare collection including cleanser, toner, and moisturizer',
            imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80'
        },
        {
            _id: '2',
            name: 'Professional Billiard Cue',
            price: 299.99,
            description: 'Tournament-grade billiard cue with carrying case',
            imageUrl: 'https://ph-test-11.slatic.net/p/c6a4397a7b965bed7dfcd11b5379107f.jpg'
        },
        {
            _id: '3',
            name: 'Artisan Coffee Maker',
            price: 159.99,
            description: 'Pour-over coffee maker with temperature control',
            imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80'
        },
        {
            _id: '4',
            name: 'Collector\'s Anime Figurine',
            price: 79.99,
            description: 'Limited edition hand-painted anime character figurine',
            imageUrl: 'https://down-ph.img.susercontent.com/file/ph-11134207-7quky-lfqla4scxdsv79'
        },
        {
            _id: '5',
            name: 'Premium Coffee Beans',
            price: 24.99,
            description: 'Organic single-origin coffee beans, freshly roasted',
            imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80'
        },
        {
            _id: '6',
            name: 'Makeup Brush Set',
            price: 49.99,
            description: 'Professional 12-piece makeup brush set with case',
            imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80'
        },
        {
            _id: '7',
            name: 'Table Pool Ball Set',
            price: 199.99,
            description: 'Tabletop pool table with accessories',
            imageUrl: 'https://www.tribilliards.com/media/magefan_blog/Depositphotos_132194858_L.jpg'
        },
        {
            _id: '8',
            name: 'Gaming Character Figurine',
            price: 89.99,
            description: 'Detailed gaming character collectible figurine',
            imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80'
        },
        {
            _id: '9',
            name: 'PickleBall Set',
            price: 89.99,
            description: 'Detailed gaming character collectible figurine',
            imageUrl: 'https://media.wired.com/photos/66f6db713f6a853ed0b09a00/191:100/w_2580,c_limit/Pickleball%20Products%20Abstract%20Background%20092024%20SOURCE%20Amazon.jpg'
        },
        {
            _id: '10',
            name: 'Billiard Accessories Set',
            price: 89.99,
            description: 'Billiard Accessories Set',
            imageUrl: 'https://www.presidentialbilliards.com/wp-content/uploads/2020/02/Diplomat-Play-Kit.jpg'
        }
    ];

    const [products] = useState(mockProducts);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`pagination__button ${currentPage === i ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <>
            <div className="home-page">
                <Carousel />
                <div className="content-wrapper">
                    <h1>Welcome to BILMAGIC Store</h1>
                    <DealsSection /> {/* Update this line */}
                    <div className="product-list">
                        {currentProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                    <div className="pagination">
                        <button
                            className="pagination__button"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {renderPagination()}
                        <button
                            className="pagination__button"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;

