import { useState } from "react";
import "./Header.css"
import Navigation from "./navigation/Navigation";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header id="main-header" className="columns">
            <h1><a href="#">Ward One</a></h1>
            <button id="nav-toggle" onClick={() => setNavOpen(!navOpen)}>&#9776;</button>
            <Navigation isOpen={navOpen} />
        </header>
    );
};

export default Header;
