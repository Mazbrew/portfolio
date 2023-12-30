import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
    let mark = [" ", " ", " "];

    switch (useLocation().pathname) {
        case "/":
            mark[0] = "x";
            break;
        case "/projects":
            mark[1] = "x";
            break;
        case "/work-history":
            mark[2] = "x";
            break;
    }

    return (
        <nav id="navbar">
            <Link className="links" to="/">
                {"[" + mark[0] + "] "}Home
            </Link>
            <Link className="links" to="/projects">
                {"[" + mark[1] + "] "}Projects
            </Link>
            <Link className="links" to="/work-history">
                {"[" + mark[2] + "] "}Work History
            </Link>
        </nav>
    );
}

export default Navbar;
