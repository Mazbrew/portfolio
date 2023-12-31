import "../styles/Projects.css";

function Project(props) {
    return (
        <div id="project">
            <div className="project-title">{props.title}</div>
            <div className="project-description">{props.description}</div>
            <div className="project-description">
                <br />
                <a href={props.link} target="_blank">
                    [GO TO PROJECT]
                </a>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div id="projects-container">
            <div id="projects-page">
                <div id="projects-tile">
                    <Project
                        title={`SENTIMENT ANALYSIS ON 10K FINANCIAL REPORTS USING THE BERT MODEL`}
                        description={`Used the Bidirectional Encoder Representations from Transformers
						(BERT) model to perform sentiment analysis on 100 different 10K
						financial reports. This project utilized multiple prominent
						machine learning and data analysis libraries such as the Hugging
						Face transformers library, TensorFlow, NumPy, and Pandas.`}
                        link={`https://docs.google.com/document/d/1OXbleI6546AN1J65iW3C19cKMwpCpYV7g6uyQtbR0N8/edit`}
                    />
                    <br />
                    <Project
                        title={`AUTOMATIC WORDLE SOLVING AGENT USING IMAGE PROCESSING AND LETTER STATISTICAL ANALYSIS`}
                        description={`Created an python based agent capable of solving the ever popular game of Wordle.
						Image processing was used to detect the tiles of the board and the status of said tiles while letter 
						statistical analysis was used to rank every possible guess. The agent was benchmarked against the 10 
						randomly selected participants as well as the global average in terms of the time taken and the number of guesses.`}
                        link={`https://docs.google.com/document/d/1g8xDOCF5hnbMI-dP6uxv5A7AYt9jlyoTV_SR3I4PXVY/edit?usp=sharing`}
                    />
					<br />
					<Project
						title={`SIMPLE 3D RENDERER`}
						description={`Used Java gui libraries to create my own 3d renderer from scratch.`}
						link={`https://github.com/Mazbrew/3d-Renderer.git`}
					/>
					<br />
					<Project
						title={`APPROXIMATING THE VALUE OF PI`}
						description={`Created a program in Java to approximate the value of PI for PI day of 2022.`}
						link={`https://github.com/Mazbrew/Pi-Approx`}
					/>
					<br />
					<Project
						title={`WORDLE CLONE`}
						description={`Recreated the ever popular Wordle game in Java.`}
						link={`https://github.com/Mazbrew/wordleClone`}
					/>
					<br />
					<Project
						title={`TIC TAC TOE MIN MAX AI`}
						description={`Created a working Tic Tac Toe game alongside a Min Max Alpha Beta pruning AI opponent in Java.`}
						link={`https://github.com/Mazbrew/TicTacToe-minmax`}
					/>
					<br />
					<Project
						title={`ASCII ART GENERATOR`}
						description={`Used C to read each pixel of a bit map (BMP) image, convert those pixels to greyscale and subsequently map those greyscale to a corresponding ascii character to generate ascii art.`}
						link={`https://github.com/Mazbrew/Ascii-art-generator`}
					/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
