import React from 'react';
import './Home.css'


const Home = () => {
    return (
        <div className='header'>
            <div className='header-title'>
                <h1><small className='title'>My New Car</small></h1>
                <p>The price of Jaguar cars in India starts from 46.64 Lakh for the XE while the most expensive Jaguar car in India one is the  The newest model in the Jaguar line-up is the I-Pace with a price tag of 1.08 - 1.12 Cr.</p>
                <button className='btn'>Live Demo</button>
            </div>

            <div className='images'>
                    <img src="../Images/car.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;