import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner/Banner'
import BusinessData from './BusinessData';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <BusinessData></BusinessData>
        </div>
    );
};

export default Home;