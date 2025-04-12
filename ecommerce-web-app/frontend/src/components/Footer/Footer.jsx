import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h3>About ZHIYUAN</h3>
                    <p>Your trusted source for quality products. We provide the best shopping experience.</p>
                </div>
                <div className="footer__section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Contact Info</h3>
                    <ul className="footer__contact">
                        <li>
                            <FiMail aria-hidden="true" />
                            <a href="mailto:info@zhiyuan.com">info@zhiyuan.com</a>
                        </li>
                        <li>
                            <FiPhone aria-hidden="true" />
                            <a href="tel:+1234567890">(123) 456-7890</a>
                        </li>
                        <li>
                            <FiMapPin aria-hidden="true" />
                            <span>123 Commerce St</span>
                        </li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Follow Us</h3>
                    <div className="footer__social">
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Visit our Facebook page"
                        >
                            <FiFacebook size={24} />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Visit our Twitter page"
                        >
                            <FiTwitter size={24} />
                        </a>
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Visit our Instagram page"
                        >
                            <FiInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {currentYear} ZHIYUAN Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;