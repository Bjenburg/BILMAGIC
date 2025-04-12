import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiShoppingCart, FiUser, FiUserPlus, FiSearch } from 'react-icons/fi';
import './Navbar.scss';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const dropdownData = {
        cues: {
            title: 'Cues',
            items: ['Custom Cues', 'Production Cues', 'Jump Cues', 'Break Cues']
        },
        shafts: {
            title: 'Shafts',
            items: ['Carbon Fiber', 'Wooden Shafts', 'Performance Shafts']
        },
        accessories: {
            title: 'Accessories',
            items: ['Cases', 'Tips', 'Tools', 'Chalk', 'Gloves']
        }
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar__main">
                <div className="navbar__logo">
                    <Link to="/">BILMAGIC</Link>
                </div>

                <form className="navbar__search" onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search products"
                    />
                    <button type="submit" className="navbar__search-button" aria-label="Search">
                        <FiSearch size={20} />
                    </button>
                </form>

                <div className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/cart" className="navbar__link cart-link">
                        <FiShoppingCart size={20} aria-hidden="true" />
                        <span>Cart</span>
                        {cartItemsCount > 0 && (
                            <span className="cart-counter">{cartItemsCount}</span>
                        )}
                    </Link>
                    <Link to="/login" className="navbar__link">
                        <FiUser size={20} aria-hidden="true" />
                        <span>Login</span>
                    </Link>
                    <Link to="/signup" className="navbar__link">
                        <FiUserPlus size={20} aria-hidden="true" />
                        <span>Sign Up</span>
                    </Link>
                </div>

                <button 
                    className="navbar__mobile-toggle" 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
            </div>

            <div className="navbar__secondary-links">
                {Object.keys(dropdownData).map((key) => (
                    <div
                        key={key}
                        className="navbar__dropdown"
                        onMouseEnter={() => handleDropdownEnter(key)}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <span className="navbar__secondary-link">
                            {dropdownData[key].title}
                        </span>
                        {activeDropdown === key && (
                            <div className="navbar__dropdown-content">
                                {dropdownData[key].items.map((item) => (
                                    <Link
                                        key={item}
                                        to={`/${key}/${item.toLowerCase().replace(' ', '-')}`}
                                        className="navbar__dropdown-item"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <NavLink to="/contact" className="navbar__secondary-link">Contact Us</NavLink>
                <NavLink to="/about" className="navbar__secondary-link">About Us</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;