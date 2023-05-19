import React from 'react';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import TeamPartner from '../Team/TeamPartner';
import CustomerReview from './CustomerReview/CustomerReview';
import useTitle from '../../../TitleHooks/useTitle';
import CategoryTab from '../CategoryTab/CategoryTab';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <TeamPartner></TeamPartner>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;