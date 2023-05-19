import React from 'react';
import { Link } from 'react-router-dom';

const ToyTableRow = ({ toy, index, toyDetails }) => {
    const { category, toyName, toyImg, user, price, _id } = toy

    return (
        <tr className=' font-semibold'>
            <th>
                <h1>{index + 1}</h1>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={toyImg} />
                    </div>
                </div>
            </td>
            <td>
                <h1>{toyName}</h1>
            </td>
            <td>
                <h1>{category}</h1>
            </td>
            <td>
                <h1>Price: $ {price}</h1>
            </td>
            <td>
                <h1>Seller Name: {user}</h1>
            </td>
            <th>
                <Link to={`/details/${_id}`} className="btn btn-outline btn-md ">Details</Link>
            </th>
        </tr>
    );
};

export default ToyTableRow;