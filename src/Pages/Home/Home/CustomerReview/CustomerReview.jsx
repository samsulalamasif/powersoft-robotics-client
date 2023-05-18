import React from 'react';

const CustomerReview = () => {
    return (
        <div className='text-center my-24'>
            <h1 className='mb-5 text-4xl font-bold font-serif'>Our Customer Review
            </h1>
            <p className="mb-5">Robotics is a branch of engineering that involves <br />
                the conception, design, manufacture and operation of robots. The objective of the
                <br />
                robotics field is to create intelligent machines that can assist humans in a variety <br />
                of ways. Robotics can take on a number of forms.</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mx-auto">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions mt-5">
                            <div className='flex gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-emerald-400  ">
                                        <img src="https://media.istockphoto.com/id/613303438/photo/muslim-in-mosque.jpg?s=612x612&w=0&k=20&c=C8Er99V40BLNOhOx0JtfgwXLnLxwVoksWnSfMgZskcA=" />
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-lg'>Rakib Khan</h1>
                                    <h1>India</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mx-auto">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions mt-5">
                            <div className='flex gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-emerald-400  ">
                                        <img src="https://media.istockphoto.com/id/637900822/photo/portrait-of-young-man-in-office.jpg?s=612x612&w=0&k=20&c=zDgeQOSjtmu3mwDcw7DIhBnMwMxTiojkYSrHKeDboL0=" />
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-lg'>Adnro Smith</h1>
                                    <h1>California</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mx-auto">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions mt-5">
                            <div className='flex gap-5'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-emerald-400  ">
                                        <img src="https://media.istockphoto.com/id/1023229588/photo/young-male-educator-stands-proudly-in-school-building.jpg?s=612x612&w=0&k=20&c=qra2owV9l3gp3X-fj0I5CUnPllyQIzpUSmOPmLjEeQo=" />
                                    </div>
                                </div>
                                <div >
                                    <h1 className='text-lg'>Mohammad Rean</h1>
                                    <h1>Bangladesh</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerReview;