import "../styles/Landing.css";

function Landing() {
    const d = new Date();
    const age = d.getFullYear() - 2001;

    return (
        <div id="landing-container">
            <div id="landing-page">
                <div id="landing-text">
                    <div id="header">PE-TER YEOH</div>
                    <pre className="content">
                        AGE: 
						<br /> {age}
						<br />
                        <br />GENDER: 
						<br /> &#x2642; Male
						<br />
						<br />PREFFERED ROLE:
						<br /> Software Engineer
						<br />
						<br />EDUCATION:
						<br /> BSC Computer Science with AI
						<br />
						<br />LANGUAGES:
						<br /> English       [5/5]
						<br /> Bahasa Melayu [4/5]
						<br /> Cantonese     [2/5]
						<br /> Mandarin      [1/5]
						<br /> Japanese      [1/5]
						<br />
                        <br />HOBBIES:
                        <br /> Brewing Coffee
                        <br /> Mechanical Keyboards
                        <br /> Gaming
                        <br /> Manga/Anime
						<br /> Programming
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default Landing;
