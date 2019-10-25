import React from 'react';

function Product(prop){
    return (
        <div className = "product-list">
            <h1>Name: {prop.product.name}</h1>
            <h2>Price: {prop.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h2>
            <h3>Description: {prop.product.description}</h3>
        </div>
    )
}
export default Product;