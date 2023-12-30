import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

import "../styles/FancyDisplay.css";

function sketch(p5) {
    let width = 0;
    let height = 0;
    let theme = "";
    let color = "";
    let background = "";

    let dim = 10;
    let scale = 150;
    let points = [];

    let rotation = 0.0;
    let rotation_speed = 0.5;

    p5.updateWithProps = (props) => {
        width = props.width;
        height = props.height;
        theme = props.theme;

        if (theme == "light-mode") {
            background = "#e6e6e6";
            color = p5.color("rgba(0,0,0,0.15)");
        } else if (theme == "dark-mode") {
            background = "#191919";
            color = p5.color("rgba(255,255,255,0.15)");
        }
    };

    p5.setup = () => {
        p5.createCanvas(0, 0, p5.WEBGL);
        p5.angleMode(p5.DEGREES);

        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                for (let k = 0; k < dim; k++) {
                    if (
                        i == 0 ||
                        i == dim - 1 ||
                        j == 0 ||
                        j == dim - 1 ||
                        k == 0 ||
                        k == dim - 1
                    ) {
                        p5.append(
                            points,
                            new p5.constructor.Vector(
                                p5.map(i, 0, dim, -scale, scale),
                                p5.map(j, 0, dim, -scale, scale),
                                p5.map(k, 0, dim, -scale, scale)
                            )
                        );
                    }
                }
            }
        }
    };

    p5.draw = () => {
        p5.resizeCanvas(width, height, true);
        p5.background(background);
        p5.stroke(color);
        p5.strokeWeight(5);

        p5.rotateX(rotation);
        p5.rotateY(rotation);

        for (let i = 0; i < points.length; i++) {
            p5.point(points[i]);
        }

        rotation = (rotation + rotation_speed) % 360;
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
