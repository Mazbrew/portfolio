import "../styles/Landing.css";

function Landing() {
    const d = new Date();
    const age = d.getFullYear() - 2001;

    return (
        <div id="landing-container">
            <div id="landing-page">
                <div id="landing-text">
                    <div id="header">PETER YEOH</div>
                    <pre className="content">
                        AGE: 
						<br /> {age}
						<br />
                        <br />GENDER: 
						<br /> &#x2642; MALE
						<br />
						<br />PREFFERED ROLE:
						<br /> SOFTWARE ENGINEER
						<br />
						<br />EDUCATION:
						<br /> BSC COMPUTER SCIENCE WITH AI
						<br />
						<br />LANGUAGES:
						<br /> ENGLISH       [5/5]
						<br /> BAHASA MELAYU [4/5]
						<br /> CANTONESE     [2/5]
						<br /> CHINESE       [1/5]
						<br /> JAPANESE      [1/5]
						<br />
                        <br />HOBBIES:
                        <br /> BREWING COFFEE
                        <br /> MECHANICAL KEYBOARDS
                        <br /> GAMING
                        <br /> MANGA/ANIME
						<br /> PROGRAMMING
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default Landing;
