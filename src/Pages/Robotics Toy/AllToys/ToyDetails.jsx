import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const loader = useLoaderData()
    const { user, toyImg, toyName, category, quantity, rating, price, details } = loader
    // console.log(loader);


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={toyImg} className="max-w-sm rounded-lg shadow-2xl mr-32" />
                <div>
                    <h1 className="text-2xl font-bold">{toyName}</h1>
                    <p className="py-6">{details}</p>
                    <div className='font-semibold my-3'>
                        <p className='text-lg mb-2 text-orange-600'>Price: {price}</p>
                        <p>Category: {category}</p>
                        <p>Available Quantity: {quantity} </p>
                        <p >Seller Name: {user}</p>
                        <Rating className='my-5' style={{ maxWidth: 120 }} value={Math.round(rating || 0)} readOnly />
                    </div>

                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;