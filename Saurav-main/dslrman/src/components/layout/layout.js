import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css'; // Optional: Add layout-specific styles

const Layout = ({ children, logo }) => {
    return (
        <div className="layout">
            <Header
                logo={logo}
                navigation={
                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                }
            />
            <main className="layout__content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
