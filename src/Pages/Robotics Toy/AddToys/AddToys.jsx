import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../../TitleHooks/useTitle';

const AddToys = () => {
    useTitle("Toy Add")
    const { user } = useContext(AuthContext)

    const addToyHandle = (event) => {
        event.preventDefault()

        const form = event.target
        const user = form.user.value
        const email = form.email.value
        const toyImg = form.photo.value
        const toyName = form.toyName.value
        const category = form.category.value
        const quantity = form.quantity.value
        const rating = form.rating.value
        const price = form.price.value
        const details = form.details.value

        const addToy = {
            user, email, toyImg, toyName, category, quantity, rating, price, details
        }
        console.log(addToy);
        fetch("http://localhost:5000/addToy", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Toy add successfully!',
                        'Thank You!',
                        'success'
                    )
                    form.reset()
                }
            })
    }


    return (
        <div className='bg-cyan-200 p-10'>
            <h1 className='text-5xl font-serif font-bold text-center p-20'>Add A Toy</h1>
            <div className="card w-1/3 shadow-2xl bg-base-100 my-10 mx-auto">
                <form onSubmit={addToyHandle}>
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-center mb-10'>Toy Details</h1>
                        <div className='flex gap-5'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name='toyName' required placeholder="toy name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy url</span>
                                </label>
                                <input type="text" name='photo' required placeholder="toy url" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex gap-5 my-4'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Sub-Category</span>
                                </label>
                                <select className="select select-bordered max-w-xs" required name='category'>
                                    <option>Humanoid Robotics</option>
                                    <option>Wheeled Robotics</option>
                                    <option>Legged Robotics</option>
                                </select>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name='quantity' required placeholder="toy quantity" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' required placeholder="rating" className="input input-bordered" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' required placeholder="price" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>
                            <input type="text" name='details' required placeholder="details description" className="input input-bordered" />
                        </div>
                        <div className='flex gap-5'>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name='user' defaultValue={user.displayName} disabled required placeholder="user" className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" name='email' defaultValue={user.email} disabled required placeholder="email" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Add Toy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;