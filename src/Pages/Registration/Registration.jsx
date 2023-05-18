import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl mt-20 font-bold">Registration Please!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mb-10 bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <span className="label-text text-red-600">error</span>
                        <span className="label-text text-cyan-500">success</span>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Register</button>
                        </div>
                        <span className="label-text">
                            Already Have an Account? <Link className='text-cyan-500' to="/login">Login</Link>
                        </span>
                    </form>
                    <button className='flex justify-center mb-5'>
                        <img className='w-56 h-14 rounded-2xl' src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Registration;