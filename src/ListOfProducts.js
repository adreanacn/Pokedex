import React from "react";

const ListOfProducts = props => {
    const { products } = props;

    console.log(products);

    const list = products.map((product, index) => {
        return (
            <li key={index}>
                {product.name}: {product.price}
            </li>
        );
    });

    return (
        <div>
            <div>
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
            <ul>{list}</ul>
        </div>
    );
};

export default ListOfProducts;