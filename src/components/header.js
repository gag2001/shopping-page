import React, { useState,useEffect } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onSearch }) => {
    const [showMenu, setShowMenu] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowMenu(currentScrollY < lastScrollY || currentScrollY <= 200);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        onSearch(value);
    };

    return (
        <header style={{ top: showMenu ? "0" : "-120px" }} className="header">
            <div className="logo">LOGOTYPE</div>
             <div className="search-container">

                {showSearch ? (
                    <div className="search-input">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchText}
                        onChange={handleSearchChange}
                        
                    />
                    </div>
                ) : (
                    <div className="search">
                    <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                        className="search-icon"
                        onClick={() => setShowSearch(true)}
                    />
                    </div>
                )}

            </div>
            <nav className="nav">
                <a href="#!" className="nav-item">
                    Demos <FontAwesomeIcon icon={faArrowDown} className="list-icon" />
                </a>
                <a href="#!" className="nav-item">
                    Posts <FontAwesomeIcon icon={faArrowDown} className="list-icon" />
                </a>
                <a href="#!" className="nav-item">
                    Features <FontAwesomeIcon icon={faArrowDown} className="list-icon" />
                </a>
                <a href="#!" className="nav-item">
                    Categories <FontAwesomeIcon icon={faArrowDown} className="list-icon" />
                </a>
                <a href="#!" className="nav-item">
                    Shop <FontAwesomeIcon icon={faArrowDown} className="list-icon" />
                </a>
                <a href="#!" className="nav-item">
                    Buy Now <FontAwesomeIcon icon={faArrowDown} className="list-icon" />
                </a>
            </nav>
        </header>
    );
};

export default Header;
