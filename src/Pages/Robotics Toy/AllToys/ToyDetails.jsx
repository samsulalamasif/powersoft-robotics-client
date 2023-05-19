import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../../TitleHooks/useTitle';
import Swal from 'sweetalert2';

const ToyDetails = () => {
    useTitle("Toy Details")
    const loader = useLoaderData()
    const { user, toyImg, toyName, category, quantity, rating, price, details } = loader
    // console.log(loader);

    const purchase = () => {
        Swal.fire(
            'Thank You',
            'Your toy has been purchased.',
            'success'
        )

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={toyImg} className="w-[380px] h-[380px] rounded-2xl shadow-2xl mr-32" />
                <div>
                    <h1 className="text-2xl font-bold">{toyName}</h1>
                    <p className="py-6">{details}</p>
                    <div className='font-semibold my-3'>
                        <p className='text-lg mb-2 text-orange-600'>Price: $ {price}</p>
                        <p>Category: {category}</p>
                        <p>Available Quantity: {quantity} </p>
                        <p >Seller Name: {user}</p>
                        <div className='flex items-center gap-5'>
                            <Rating className='my-5' style={{ maxWidth: 120 }} value={Math.round(rating || 0)} readOnly />
                            <p>{rating}</p>
                        </div>
                    </div>

                    <button className="btn btn-outline" onClick={purchase} >Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;