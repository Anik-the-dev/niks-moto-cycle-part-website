import React from 'react';
import AboutUs from './AboutUs';
import Achievements from './Achievements';
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
            
            <Reviews></Reviews>
            <Achievements></Achievements>
            <BusinessData></BusinessData>

        </div>
    );
};

export default Home;