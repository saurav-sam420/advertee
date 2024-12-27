import React from 'react';
import Layout from '../../components/layout/layout';
import logo from '../../assests/images/dslrmanlogo.png'; // Adjust path if necessary

const Home = () => {
    return (
        <Layout logo={logo}>
            <h1>Welcome to Home Page</h1>
            <p>This is the home page content.</p>
        </Layout>
    );
};

export default Home;
