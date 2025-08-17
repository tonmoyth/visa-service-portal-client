import React from 'react';
import Hero from '../../components/Hero/Hero';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home</title>
            </Helmet>
           <Hero></Hero>
        </div>
    );
};

export default Home;