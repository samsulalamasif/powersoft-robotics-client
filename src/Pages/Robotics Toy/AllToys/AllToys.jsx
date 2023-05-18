import React, { useEffect, useState } from 'react';
import ToyTableRow from './ToyTableRow';
import useTitle from '../../../TitleHooks/useTitle';

const AllToys = () => {
    useTitle("All Toys")
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])








    return (
        <div className="overflow-x-auto w-full">
            <button className='btn btn-outline my-5'>Search</button>
            <table className="table w-full my-5">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            No.
                        </th>
                        <th>Toy Photo</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Toy Price</th>
                        <th>Seller Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <ToyTableRow
                            key={toy._id}
                            toy={toy}
                            index={index}>
                        </ToyTableRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;