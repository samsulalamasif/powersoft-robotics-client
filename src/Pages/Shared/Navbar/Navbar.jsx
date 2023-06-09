import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "/logo.svg"
import { AuthContext } from '../../../providers/AuthProviders';
import ActiveLink from './ActiveLink/ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    const router = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
        <li><ActiveLink to="/toys">All Toys</ActiveLink></li>
        {user && <>
            <li><ActiveLink to="/myToys">My Toys</ActiveLink></li>
            <li><ActiveLink to="/addToys">Add A Toy</ActiveLink></li>
        </>}
    </>


    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {router}
                    </ul>
                </div>
                <img className='w-10 h-10 pr-2' src={logo} alt="" />
                <Link to="/" className="text-2xl font-bold font-serif">Powersoft <span className='text-orange-600'>Robotics</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    {router}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="tooltip tooltip-left" data-tip={user.displayName}>
                    <img className='w-16 h-16 p-2 rounded-full' src={user.photoURL} />
                </div>}
                {user ?
                    <button onClick={handleLogOut} className='btn btn-outline'>Logout</button> :
                    <Link to="/login">
                        <button className='btn btn-outline'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;