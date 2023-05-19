import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ toy }) => {
    const { toyImg, toyName, category, rating, price, _id } = toy

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='w-full h-64' src={toyImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p className='font-bold'>Toy Category: {category}</p>
                <p className='font-bold'>Price: $ {price}</p>
                <div className='flex items-center gap-5'>
                    <Rating className='my-5' style={{ maxWidth: 120 }} value={Math.round(rating || 0)} readOnly />
                    <p className='font-bold'>{rating}</p>
                </div>

                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`} className="btn btn-outline btn-sm">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;