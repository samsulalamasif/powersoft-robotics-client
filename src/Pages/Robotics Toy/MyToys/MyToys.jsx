import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
        , [user])


    const toyDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to toy delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining)
                        }
                    })
            }
        })
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
                        <th>Updated</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            index={index}
                            toyDelete={toyDelete}>
                        </MyToyRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};
export default MyToys;