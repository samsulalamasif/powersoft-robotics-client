import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../TitleHooks/useTitle';

const MyToyUpdate = () => {
    useTitle("Toy Update")

    const loader = useLoaderData()
    const { _id, price, quantity, details } = loader
    // console.log(_id);

    const toyUpdate = (event) => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const details = form.details.value

        const updateToy = {
            price, quantity, details
        }
        // console.log(updateToy);

        fetch(`http://localhost:5000/update/${loader?._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateToy),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Toy updated successfully!',
                        'Thank You!',
                        'success'
                    )
                    form.reset()
                }
            });

    }







    return (
        <div className='bg-cyan-200 p-10'>
            <div className="card w-1/3 shadow-2xl bg-base-100 my-10 mx-auto">
                <form onSubmit={toyUpdate}>
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-center mb-10'>Update Toy Details </h1>

                        <div className='flex gap-5 my-4'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text" >Price</span>
                                </label>
                                <input type="text" name='price' required placeholder="price" className="input input-bordered" defaultValue={price} />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text" >Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' required placeholder="toy quantity" defaultValue={quantity} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text" >Details Description</span>
                            </label>
                            <input type="text" name='details' required placeholder="details description" className="input input-bordered" defaultValue={details} />
                        </div>
                        <div className="flex justify-center mt-5">
                            <button className="btn btn-outline">Update Toy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyToyUpdate;