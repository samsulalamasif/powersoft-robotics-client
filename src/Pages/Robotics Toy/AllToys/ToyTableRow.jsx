import React from 'react';

const ToyTableRow = ({ toy, index }) => {
    const { category, toyName, toyImg, user, email, _id } = toy

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
                <div>
                    <h1>Seller Name: {user}</h1>
                    <h1>Seller Email: {email}</h1>
                </div>
            </td>
            <th>
                <button className="btn btn-outline btn-xs">Details</button>
            </th>
        </tr>
    );
};

export default ToyTableRow;