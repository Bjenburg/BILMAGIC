import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            image: 'https://ph-test-11.slatic.net/p/c6a4397a7b965bed7dfcd11b5379107f.jpg',
            title: 'Professional Cues',
            description: 'Discover our premium collection'
        },
        {
            image: 'https://www.presidentialbilliards.com/wp-content/uploads/2020/02/Diplomat-Play-Kit.jpg',
            title: 'Premium Accessories',
            description: 'Complete your setup with quality accessories'
        },
        {
            image: 'https://www.tribilliards.com/media/magefan_blog/Depositphotos_132194858_L.jpg',
            title: 'Pool Ball Sets',
            description: 'Professional grade ball sets'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel__slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.image} alt={slide.title} />
                    <div className="carousel__content">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;