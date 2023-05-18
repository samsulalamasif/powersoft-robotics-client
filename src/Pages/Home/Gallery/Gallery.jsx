import React from 'react';

const Gallery = () => {
    return (
        <div className='text-center my-24'>
            <h1 className='mb-5 text-4xl font-bold font-serif'>Our Robotics Gallery</h1>
            <p className="mb-5">Robotics is a branch of engineering that involves <br />
                the conception, design, manufacture and operation of robots. The objective of the
                <br />
                robotics field is to create intelligent machines that can assist humans in a variety <br />
                of ways. Robotics can take on a number of forms.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:p-10'>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://media.istockphoto.com/id/1250677553/photo/little-robot-waving-hand-cute-robot-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=9kVkQl2VHNyu3p2BqWCXtoTRPEHjkEipmVoMrbLeQwQ=" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='p-5' src="https://m.media-amazon.com/images/I/81H5Rw1UxLL._AC_SX679_.jpg" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://img.freepik.com/premium-photo/cute-small-artificial-intelligence-assistant-robot-think-analyze_493806-15559.jpg" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://m.media-amazon.com/images/I/61O7ukjIAiL.jpg" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img src="https://media.leisureliving.com/media/webp/f71bbd5609cb9ce272a021a3d64412fd.1000x1000.webp" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='pt-10' src="https://media.leisureliving.com/media/webp/a3b82d02d583a8828beb94eb51d9e23f.1000x1000.webp" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='p-10' src="https://m.media-amazon.com/images/I/6119-AunFdL._AC_SX679_.jpg" alt="" /></figure>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl mx-auto">
                    <figure><img className='pt-10' src="https://cdn.shopify.com/s/files/1/0088/0263/1760/products/JOH00744_3_800x800.jpg?v=1584581250" alt="" /></figure>
                </div>


            </div>

        </div>
    );
};

export default Gallery;