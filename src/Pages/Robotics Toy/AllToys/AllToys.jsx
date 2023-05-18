import React, { useEffect, useState } from 'react';
import ToyTableRow from './ToyTableRow';

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const toyDetails = (id) => {
        console.log(id);
    }




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
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <ToyTableRow
                            key={toy._id}
                            toy={toy}
                            index={index}
                            toyDetails={toyDetails}>
                        </ToyTableRow>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default AllToys;