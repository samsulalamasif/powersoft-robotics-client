import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import MyToyRow from './MyToyRow';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
        , [user])









    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            No.
                        </th>
                        <th>Toy Photo</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Seller Details</th>
                        <th>Updated</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            index={index}>
                        </MyToyRow>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default MyToys;