import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import React from 'react'

export const AllProducts = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/products');
                setProductData(response.data);
            } catch (error) {
                console.error('Error getting products:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>products here</h1>
            {productData.map((product) => {
                <div key={product.productId} className="w-full sm:w-1/2 md:w-1/3 flex items-center justify-center">
                    <div className="text-black"> {product.productName} </div>
                </div>
            })}
        </div>
    )
}
