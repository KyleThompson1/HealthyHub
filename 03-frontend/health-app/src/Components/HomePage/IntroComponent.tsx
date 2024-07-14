import React, { useEffect, useState } from 'react';
import picOne from '../../Images/Veggie Dishes/DishOne.jpg';
import picTwo from '../../Images/Veggie Dishes/DishTwo.jpg';
import picThree from '../../Images/Veggie Dishes/DishThree.jpg';
import picFour from '../../Images/Veggie Dishes/DishFour.jpg';
import picFive from '../../Images/Veggie Dishes/DishFive.jpg';
import picSix from '../../Images/Veggie Dishes/DishSix.jpg';
import picSeven from '../../Images/Veggie Dishes/DishSeven.jpg';
import { Link } from 'react-router-dom'; 

export const IntroComponent = () => {
    
    const imgArray = [picOne, picTwo, picThree, picFour, picFive, picSix, picSeven];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % imgArray.length);
                setFade(false);
            }, 500); // duration of fade out
        }, 8000); // change image every 8 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='bg-dark header position-relative'>
            <div 
                className={`intro-background ${fade ? 'fade' : 'show'}`}
                style={{ backgroundImage: `url(${imgArray[currentImageIndex]})` }}
            />
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center intro-content mt-5'>
                <div>
                    <div className='card bg-light text-dark shadow-lg image-border' style={{ padding: '20px', display: 'flex', 
                                    alignItems: 'center', textAlign: 'center', width: '60%', margin: '0 auto' }}>
                        <div className='card-title'>
                            <h1 className='display-5 fw-bold' style={{ color: 'green' }}>Welcome to Healthy Hub</h1>
                        </div>
                        <p className='col-md-8 fs-4'>
                            Where health and fitness are celebrated. Our goal is to uplift 
                            and inspire others to take an active role in their health!</p>
                        <div className='card-body justify-content-center d-flex'>
                            <Link to='create-account' className='btn green-button btn-lg text-white intro-button-grow'>
                                Come join the movement
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
