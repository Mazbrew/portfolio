import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

import "../styles/FancyDisplay.css";

function sketch(p5) {
    let width = 0;
    let height = 0;
    let theme = "";
    let color = "";
    let background = "";

    let i = 0;

    p5.updateWithProps = (props) => {
        width = props.width;
        height = props.height;
        theme = props.theme;

        if (theme == "light-mode") {
            background = "#e6e6e6";
        } else if (theme == "dark-mode") {
            background = "#191919";
        }
    };

    p5.setup = () => {
        const canvas = p5.createCanvas(0, 0, p5.WEBGL);
    };

    p5.draw = () => {
        p5.resizeCanvas(width, height, true);
        p5.background(background);
        p5.stroke(color);
        p5.strokeWeight(5);
        p5.line(0, i, 100, i + 100);
        i = i + 1;

        if (i >= height / 2) {
            i = (height / 2) * -1;
        }
    };
}

function FancyDisplay(props) {
    const ref = useRef(null);

    const [numbers, setNumbers] = useState([]);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.scrollWidth);
        setHeight(ref.current.scrollHeight);
    }, [numbers]);

    useEffect(() => {
        function handleWindowResize() {
            setWidth(ref.current.scrollWidth);
            setHeight(ref.current.scrollHeight);
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div id="fancy-display-container">
            <div id="fancy-display" ref={ref}>
                <ReactP5Wrapper
                    id="p5"
                    sketch={sketch}
                    width={width}
                    height={height}
                    theme={props.theme}
                />
            </div>
        </div>
    );
}

export default FancyDisplay;
