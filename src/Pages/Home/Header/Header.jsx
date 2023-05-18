import React from 'react';
import robot from "../../../assets/robot.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${robot})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold font-serif">Powersoft <span className='text-orange-600'>Robotics</span></h1>
                    <p className="mb-5">Robotics is a branch of engineering that involves the conception, design, manufacture and operation of robots. The objective of the robotics field is to create intelligent machines that can assist humans in a variety of ways. Robotics can take on a number of forms.</p>
                    <Link to="/" className="btn btn-outline text-white">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;