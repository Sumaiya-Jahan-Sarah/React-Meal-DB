import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { product, handlerOrder } = props;
    const { strMealThumb, strMeal, strInstructions, strCategory, strArea
    } = product;

    return (
        <div className='product'>
            <img src={strMealThumb} alt="" />
            <h2>Name:{strMeal}</h2>
            <h4>Category:{strCategory}</h4>
            <p>Area: {strArea}</p>
            <p className='instruction'>{strInstructions.slice(0, 300)}</p>

            <div>
                <button onClick={() => handlerOrder(product)} className='btn-order'>Add to Order
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;