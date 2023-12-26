import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "../styles/FancyDisplay.css";

function FancyDisplay() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {}, []);

    return <div id="fancy-display-container"></div>;
}

export default FancyDisplay;
