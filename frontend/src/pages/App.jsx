import { useState } from "react";

import LightSwitch from "../components/LightSwitch.jsx";
import FancyDisplay from "../components/FancyDisplay.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "../styles/App.css";
import "../styles/Themes.css";

import Landing from "./Landing.jsx";
import Error from "./Error.jsx";

import Navbar from "../components/Navbar.jsx";

function App() {
    const [theme, setTheme] = useState("dark-mode");

    const setLight = () => {
        setTheme("light-mode");
    };

    const setDark = () => {
        setTheme("dark-mode");
    };

    let themeSwap = null;

    if (theme == "light-mode") {
        themeSwap = setDark;
    } else if (theme == "dark-mode") {
        themeSwap = setLight;
    }

    return (
        <div>
            <div id="app-container" className={theme}>
                <div id="theme-selector-container">
                    <LightSwitch onClick={themeSwap} />
                </div>

                <BrowserRouter>
                    <Navbar />

                    <div id="page-container">
                        <Routes>
                            <Route path="/" element={<Landing />}></Route>
                            <Route path="*" element={<Error />}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
                <FancyDisplay theme={theme} />
            </div>
        </div>
    );
}

export default App;
