import React from 'react';

const MyToyRow = ({ toy, index, toyUpdate, toyDelete }) => {
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
                <button onClick={() => toyUpdate(_id)} className="btn btn-info btn-sm ">Update</button>
            </th>
            <th>
                <button onClick={() => toyDelete(_id)} className="btn btn-error btn-sm">Delete</button>
            </th>
        </tr>
    );
};

export default MyToyRow;