import React from 'react';
import { useParams } from 'react-router-dom';
import './SpecificationsPage.scss';

const SpecificationsPage = () => {
    const { id } = useParams();

    const productDetails = {
        name: 'Duke Dracula P-T01',
        price: 260,
        oldPrice: 300,
        description: 'Introducing the latest PERI EARL series cues, featuring vibrant maple 4-point true splice designs, spliced points are structurally build into the cue making it stronger and more stable. Each cue comes paired with Peri renowned low-deflection Pro shaft and radial Pin joint, taking the players game to an entirely new level.',
        mainImages: [
            'http://www.pericues-int.com/product/img/P-T01%20Dracula-02.jpg',
             'http://www.pericues-int.com/Product/img/P-T01%20Dracula-01.jpg'
        ],
        features: [
            {
                title: 'Silver color Alloy & Cocobolo wood Inlay Rings',
                image: 'http://www.pericues-int.com/Product/img/texie/P-T01%20Dracula-03.jpg'
            },
            {
                title: 'A Level Cocobolo Wood Forearm',
                image: 'http://www.pericues-int.com/Product/img/texie/P-T01%20Dracula-04.jpg'
            },
            {
                title: 'Radian Pin Joint',
                image: 'http://www.pericues-int.com/Product/img/texie/P-T01%20Dracula-05.jpg'
            }
        ]
    };

    const specifications = {
        dimensions: {
            title: 'Dimensions',
            specs: [
                { label: 'Length', value: '58 inches' },
                { label: 'Weight', value: '19-21 oz' },
                { label: 'Tip Size', value: '12.75mm' }
            ]
        },
        materials: {
            title: 'Materials',
            specs: [
                { label: 'Shaft', value: 'North American Grade A+ Maple' },
                { label: 'Forearm', value: 'Selected Cocobolo Wood' },
                { label: 'Wrap', value: 'Double Pressed Irish Linen' },
                { label: 'Joint', value: 'Stainless Steel Radial Pin' }
            ]
        },
        construction: {
            title: 'Construction Details',
            specs: [
                { label: 'Point Design', value: '4-Point Maple True Splice' },
                { label: 'Inlays', value: 'Silver Color Alloy & Cocobolo Wood' },
                { label: 'Finish', value: 'High Gloss UV Coating' }
            ]
        }
    };

    return (
        <div className="specifications-page">
            <div className="specs-container">
                <div className="product-header">
                    <h1>{productDetails.name}</h1>
                    <div className="price-container">
                        <span className="current-price">${productDetails.price}</span>
                        {productDetails.oldPrice && (
                            <span className="old-price">${productDetails.oldPrice}</span>
                        )}
                    </div>
                    <p className="description">{productDetails.description}</p>
                </div>

                <div className="product-images">
                    <div className="main-image">
                        <img src={productDetails.mainImages[0]} alt={productDetails.name} />
                    </div>
                    <div className="secondary-image">
                        <img src={productDetails.mainImages[1]} alt={productDetails.name} />
                    </div>
                </div>

                <div className="feature-grid">
                    {productDetails.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                            <h3>{feature.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="specifications-section">
                    <h2>Product Specifications</h2>
                    {Object.values(specifications).map((section) => 
                        section.specs.map((spec, index) => (
                            <div key={index} className="spec-item">
                                <span className="spec-label">{spec.label}</span>
                                <span className="spec-value">{spec.value}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpecificationsPage;