import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            {/* Netflix logo */}
            <img
                className="nav__logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
                alt="Netflix Logo"
            />
            
            {/* Avatar */}
            <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Avatar"
            />
        </div>
    );
}


export default Nav;
