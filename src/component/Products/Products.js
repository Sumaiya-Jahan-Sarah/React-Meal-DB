import React, { useState } from 'react';
import Product from '../Product/Product';

import './Products.css';
import { addToDb, getOrder } from '../localStorage/localStorage';

const Products = () => {
    const [products, setProducts] = useState([]);
    useState(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setProducts(data.meals
            ))
    }, {})


    const handlerOrder = (meal) => {
        console.log(meal);
        // let newCart = [];
        // const exists = products.find(meal => meal.idMeal === products.idMeal);
        // if (!exists) {
        //     meal.quantity = 1;
        //     newCart = [...products, meal]
        // }
        // else {
        //     const rest = products.filter(meals => meals.idMeal !== meal.idMeal);
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists];
        // }


        // setProducts(newCart)
        addToDb(meal.idMeal);
    }




    // const orderedStore = () => {
    //     const order = getOrder()

    // }








    return (
        <div className='products'>
            {products.map(product => <Product product={product} key={product.idMeal} handlerOrder={handlerOrder}></Product>)}
        </div>
    );
};

export default Products;