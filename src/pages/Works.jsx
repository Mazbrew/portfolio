import "../styles/Works.css";

function Work(props) {
    return (
        <div id="work">
            <div className="work-title">{props.company}</div>
            <div className="work-details">{props.position}</div>
            <div className="work-details">{props.duration}</div>
            <div className="work-description">{props.description}</div>
        </div>
    );
}

function Works() {
    return (
        <div id="works-container">
            <div id="works-page">
                <div id="works-tile">
                    <Work
                        company={`8I HOLDINGS`}
                        position={`Backend Developer Intern`}
                        duration={`June 2022 ~ August 2022`}
                        description={`Worked as a backend developer Intern 
						during my semester break in my second year of university.
						Worked mainly on their Ruby on Rails codebase that was 
						related to customer subscriptions and marketing tools.`}
                    />
                    <br />
                    <div id="unrelated">## UNRELATED TO FIELD ##</div>
                    <Work
                        company={`ANTONIO'S REAL NEW YORK PIZZA, ESTES PARK, CO`}
            			position={`Host`} 
                        duration={`June 2023 ~ July 2023`}
                        description={`Worked at an award winning pizzeria as a host.`}
                    />
                    <br />
                    <Work
                        company={`STANLEY HOTEL, ESTES PARK, CO`}
                        position={`Food Runner`}
                        duration={`June 2023 ~ July 2023`}
                        description={`Worked at the most haunted hotel in America as a food runner at 
						their bar/restaurant.`}
                    />
                    <br />
                    <Work
                        company={`KOI CABLES`}
                        position={`Co-Founder`}
                        duration={`June 2021 ~ July 2021`}
                        description={`KOI Cables is a small business I started with a
						friend to design and create custom cables aimed towards custom mechanical 
						keyboard enthusiasts.`}
                    />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Works;
