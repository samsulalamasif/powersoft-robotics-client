import React, { useEffect, useState } from 'react';
import ToyTableRow from './ToyTableRow';
import useTitle from '../../../TitleHooks/useTitle';

const AllToys = () => {
    useTitle("All Toys")
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch("https://powersoft-robotics-server-side.vercel.app/allToys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])




    const [searchText, setSearchText] = useState("")
    const handleSearch = () => {
        fetch(`https://powersoft-robotics-server-side.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }




    return (
        <div className="overflow-x-auto w-full">
            <div className="form-control w-full my-10">
                <div className="input-group justify-center">
                    <input type="text" onChange={(event) => setSearchText(event.target.value)}
                        placeholder="Search Robotics" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

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