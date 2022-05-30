import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner/Banner'
import BusinessData from './BusinessData';
import FeaturedTools from './FeaturedTools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <FeaturedTools></FeaturedTools>
            <BusinessData></BusinessData>

        </div>
    );
};

export default Home;