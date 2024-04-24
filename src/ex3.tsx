import React, { useState } from 'react';
import './ContainerStyles.css';
import productData from './data.json';


interface ProductData {
  image: string;
  title: string;
  brand: string;
  newPrice: string;
  usedPrice: string;
}

function AdsComponent() {
    const [data, setData] = useState<ProductData | null>(productData);

    const isDataValid = (data: ProductData): boolean => {
        const requiredFields: (keyof ProductData)[] = ['image', 'title', 'brand', 'newPrice', 'usedPrice'];
        return requiredFields.every(field => data[field] !== undefined && data[field] !== '');
    };

    if (!data || !isDataValid(data)) {
        return <div>Data Missing</div>;
    }

    return (
        <div className="main-container">
            <div className="left-container">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="right-container">
                <h2>{data.brand}</h2>
                <p>{data.title}</p>
                <div className="parallel-container">
                    <div className="newPrice">{data.newPrice}</div>
                    <div className="newPriceWord">Neuf</div>
                </div>
                <div className="parallel-container">
                    <div className="usedPriceWord">Occasion dès&nbsp;</div>
                    <div className="usedPrice">{data.usedPrice}</div>
                </div>
            </div>
        </div>
    );
}

export default AdsComponent;
