import React from 'react';

const TeamPartner = () => {
    return (
        <div className='bg-cyan-200 pb-10'>
            <h1 className='text-5xl text-center py-20 font-bold'>You would love It here!</h1>
            <div className='flex flex-col lg:flex-row justify-center gap-32'>
                <div>
                    <h1 className='font-semibold mb-10 text-center'>
                        Our mission resonates with your ideals? <br />
                        You strive to be a change-maker? <br />
                        You are more of a contributor than a mere consumer of tech?
                    </h1>
                    <div className='flex justify-center'>
                        <button className='btn btn-outline'>JOIN OUR TEAM</button>
                    </div>
                </div>
                <div className="lg:divider lg:divider-horizontal "></div>
                <div>
                    <h1 className='font-semibold text-center mb-10'>
                        Are you running a school & want to introduce robotics in your school? <br />
                        Are you a passionate teacher and like to teach robotics to kids? <br />
                        Are you a retailer want to sell robotic toys from your store?
                    </h1>
                    <div className='flex justify-center'>
                        <button className='btn btn-outline '>BECOME A PARTNER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPartner;