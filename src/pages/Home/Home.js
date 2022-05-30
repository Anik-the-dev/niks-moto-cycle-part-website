import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner/Banner'
import BusinessData from './BusinessData';
import FeaturedTools from './FeaturedTools';
import Reviews from './Reviews'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <FeaturedTools></FeaturedTools>
            <BusinessData></BusinessData>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;