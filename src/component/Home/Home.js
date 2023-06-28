import React from 'react';
import './Home.css';
import Products from '../Products/Products';
import Order from '../Order/Order';

const Home = () => {




    return (
        <div className='home'>
            <div className="food-container">
                This is food container
                <Products></Products>
            </div>
            <div className='order-container'>

                <Order></Order>
            </div>
        </div>
    );
};

export default Home;