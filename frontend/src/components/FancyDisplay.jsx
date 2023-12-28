import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

import "../styles/FancyDisplay.css";

function sketch(p5) {
    let width = 0;
    let height = 0;
    let color = "";
    let background = "";

    let i = 0;

    p5.updateWithProps = (props) => {
        width = props.width;
        height = props.height;
        color = props.color;
        background = "pink";

        console.log(width);
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

function FancyDisplay() {
    const ref = useRef(null);

    const [numbers, setNumbers] = useState([]);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [color, setColor] = useState("#333333");
    const [background, setBackground] = useState("#e6e6e6");

    useLayoutEffect(() => {
        setWidth(ref.current.scrollWidth);
        setHeight(ref.current.scrollHeight);
    }, [numbers]);

    useLayoutEffect(() => {
        setColor(window.getComputedStyle(ref.current).color);
        setBackground(window.getComputedStyle(ref.current).backgroundColor);
    }, []);

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

    useEffect(() => {
        function handleClick() {
            setColor(window.getComputedStyle(ref.current).color);
            setBackground(window.getComputedStyle(ref.current).backgroundColor);
        }

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
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
                    color={color}
                    background={background}
                />
            </div>
        </div>
    );
}

export default FancyDisplay;
