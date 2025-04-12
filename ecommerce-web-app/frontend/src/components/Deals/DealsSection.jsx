import React, { useState, useEffect } from 'react';
import './DealsSection.scss';

const DealsSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 4,
        hours: 13,
        minutes: 2,
        seconds: 45
    });

    const dealProducts = [
        {
            id: 1,
            name: 'Billard Clock',
            discount: '-25%',
            imageUrl: 'https://www.pooldawg.com/media/catalog/product/cache/4c161271b67be4ef33fec657fa2e9598/c/l/clocktuegry3.jpg'
        },
        {
            id: 2,
            name: 'Yalekang Mother Ball / White Ball',
            discount: '-15%',
            imageUrl: 'https://m.media-amazon.com/images/I/71D-qQEKhvL.jpg'
        },
        {
            id: 3,
            name: 'Billard Gloves',
            discount: '-40%',
            imageUrl: 'https://m.media-amazon.com/images/I/61R3H51CBIL.jpg'
        },
        {
            id: 4,
            name: 'Feiyang Billard Balls',
            discount: '-25%',
            imageUrl: 'https://m.media-amazon.com/images/I/71D8IfL4yQL.jpg'
        },
        {
            id: 5,
            name: 'Grama Cue Stick',
            discount: '-25%',
            imageUrl: 'https://www.pooldawg.com/media/wysiwyg/content/lucasi-custom-pool-cues/lucasi-custom-pool-cues.jpg'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="deals-section">
            <div className="deals-header">
                <h2>Deals and offers</h2>
                <div className="countdown">
                    <div className="countdown-item">
                        <span className="number">{timeLeft.days.toString().padStart(2, '0')}</span>
                        <span className="label">Days</span>
                    </div>
                    <div className="countdown-item">
                        <span className="number">{timeLeft.hours.toString().padStart(2, '0')}</span>
                        <span className="label">Hour</span>
                    </div>
                    <div className="countdown-item">
                        <span className="number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        <span className="label">Mins</span>
                    </div>
                    <div className="countdown-item">
                        <span className="number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        <span className="label">Secs</span>
                    </div>
                </div>
            </div>
            <div className="deals-grid">
                {dealProducts.map(product => (
                    <div key={product.id} className="deal-card">
                        <div className="discount-badge">{product.discount}</div>
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            onError={(e) => {
                                e.target.src = 'https://www.pooldawg.com/media/catalog/product/placeholder/default/image-not-available.jpg';
                            }}
                        />
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DealsSection;