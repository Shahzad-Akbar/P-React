import React, { memo } from "react";
import './productshow.css';

function ProductShow({ products, onProductSelect }) {
    console.log("remdered");
         
    return (
         <div className="container">

            {products.map((product) => (

                <div
                    className="products"
                    key={product.id}
                    onClick={() => onProductSelect(product)}
                >
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                    <p>₹{product.price}</p>
                </div>

            ))}

        </div>
    )
}

export default memo(ProductShow);