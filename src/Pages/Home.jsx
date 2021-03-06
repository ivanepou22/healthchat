import React from 'react'
import Hero from '../Components/Hero';
import NavBar from './../Components/NavBar';
import Services from '../Components/Services';
import CategorySection from '../Components/CategorySection';
import Specialities from '../Components/Specialities';
import VideoChat from '../Components/VideoChat';
import TrustSection from '../Components/TrustSection';
import Footer from '../Components/Footer';
import FrequentlyAskedQuestions from '../Components/FrequentlyAskedQuestions';

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Services />
            <VideoChat />
            <CategorySection />
            <Specialities />
            <TrustSection />
            <FrequentlyAskedQuestions />
            <Footer />
        </>
    )
}

export default Home