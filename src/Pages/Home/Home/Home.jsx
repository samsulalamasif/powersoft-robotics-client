import React from 'react';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import TeamPartner from '../Team/TeamPartner';
import CustomerReview from './CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <TeamPartner></TeamPartner>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;