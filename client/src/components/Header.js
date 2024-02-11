import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const Header = () => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMobileNavActive, setMobileNavActive] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!isSearchActive);
    };

    const toggleMobileNav = () => {
        setMobileNavActive(!isMobileNavActive);
    };

    return (
        <div className="nav-wrapper">
            <div className="grad-bar"></div>
            <nav className="navbar">
                <img
                    src={process.env.PUBLIC_URL + `assets/logo.png`}
                    alt="Company Logo"
                />
                <div
                    className={`menu-toggle ${
                        isMobileNavActive ? "is-active" : ""
                    }`}
                    id="mobile-menu"
                    onClick={toggleMobileNav}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul
                    className={`nav ${
                        isSearchActive ? "search" : "no-search"
                    } ${isMobileNavActive ? "nav no-search mobile-nav" : ""}`}
                >
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Work</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contact Us</a>
                    </li>
                    <i
                        className="fas fa-search"
                        id="search-icon"
                        onClick={toggleSearch}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </i>
                    <input
                        className={`search-input ${
                            isSearchActive ? "search-active" : ""
                        }`}
                        type="text"
                        placeholder="Search.."
                    />
                </ul>
            </nav>
        </div>
    );
};

export default Header;
