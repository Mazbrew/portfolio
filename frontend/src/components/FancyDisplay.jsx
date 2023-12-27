import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import "../styles/FancyDisplay.css";

function FancyDisplay() {
    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {};

    return (
        <div id="fancy-display-container">
            <div id="fancy-display">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                resize: true,
                            },
                        },
                        fullscreen: {
                            enable: false,
                            zIndex: 0,
                        },
                        style: {
                            position: "absolute",
                            top: "5vh",
                            left: "5vh",
                            width: "calc(100vw - 10vh)",
                            height: "90vh",
                        },
                        particles: {
                            color: {
                                value: "#008000",
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 500,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "square",
                            },
                            size: {
                                value: { min: 3, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </div>
    );
}

export default FancyDisplay;
