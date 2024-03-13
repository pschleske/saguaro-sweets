import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "./Product.jsx";

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
            {productData.map((product) => (
                <div key={product.productId} className="border-solid border-black">
                    <h4 className="text-lg text-black"> {product.productName} </h4>
                    <Product
                        initialProductData={{
                            name: product.productName,
                            imgUrl: product.imgUrl,
                            description: product.description,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
