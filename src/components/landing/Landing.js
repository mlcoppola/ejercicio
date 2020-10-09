import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from './Footer';
import Main from './Main';

export default function Landing() {
    return (
        <div className="animate__animated animate__fadeIn">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
