import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import Footer from '../Components/Footer';
import NavBar from './../Components/NavBar';

const Contact = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb pageName="Contact" />
            <div className="container height-60vh">
                <h1>Contact</h1>
            </div>
            <Footer />
        </>
    )
}

export default Contact