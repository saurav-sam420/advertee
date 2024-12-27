import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.css'; // Optional: For styling
import menuIcon from '../../assests/images/mobile-menu.svg';


const Header = ({ logo, navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <div className="header__logo">
                {logo && <img src={logo} alt="Logo" className="header__logo-image" />}
            </div>
            <button className="header__menu-button" onClick={toggleMenu}>
                <img src={menuIcon} alt="Menu" />
            </button>
            <nav className={`header__navigation ${isMenuOpen ? 'header__navigation--open' : ''}`}>
                {navigation}
            </nav>
        </header>
    );
};

Header.propTypes = {
    logo: PropTypes.string, // Path to the logo image
    navigation: PropTypes.node, // JSX for the navigation
};

Header.defaultProps = {
    logo: '',
    navigation: null,
};

export default Header;
