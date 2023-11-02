import "./styles/Questions.css";
import React, { useContext } from "react";
import CatGroom from "./images/catGroom.jpg";
import CatPlay from "./images/catPlay.jpg";
import CatRare from "./images/catExotic.jpg";
import Axios from "axios";
import { useState } from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import ResultContext from "./context/result-context";
import { Route } from "react-router-dom";
import Results from "./Results";

const Questions = () => {
    const [grooming, setGrooming] = useState("");
    const [activity, setActivity] = useState("");
    const [exotic, setExotic] = useState("");
    const {catList, setCatList} = useContext(ResultContext);

    const getCats = () => {
        const mygrooming = grooming;
        const myactivity = activity;
        const myexotic = exotic;
        
        console.log("Hola");

        Axios.get('https://us-central1-vernal-signal-391117.cloudfunctions.net/function-1/cats', {
          params: {
            mygrooming,
            myactivity,
            myexotic
          }
        }).then((response) => {
            console.log(response.data[0]);
            setCatList(response.data[0]);
            console.log("Que tal");
          }).catch((error) => {
            console.log(error);
          });
      };
    

    return (
        <React.Fragment>

            <div className="number-question">
                <h1 className="number-circle">1</h1>
                <h1 className="question">How often are you willing to groom your cat?</h1>
            </div>

            <div className="pic-text">
                <img src={CatGroom} width = "500px"></img>
                <p>Although cats will usually groom themselves, it is still essential for some breeds <br></br>
                   to have their owners do it for them on top of it. The reasons for this are: To prevent <br></br>
                   the formation of furballs which if ingested can become health hazards, to achieve a <br></br>
                   healthier and clean looking coat, and to remove dirty objects from them.<br></br>
                   If nothing else, grooming can also be a bonding experience between you and your<br></br>
                   friend should you choose to do it personally.
                </p>
            </div>

            <a className="fixer" href="#secondQuest">
                <div className="double-button">
                    <button onClick={() => setGrooming("min")}>Once per week</button>
                    <button onClick={() => setGrooming("max")}>Everyday</button>
                </div>
            </a>

            { grooming !== "" ? <div className="theAnimation">
                <div className="spacer"></div>
                <div className="number-question">
                    <h1 className="number-circle">2</h1>
                    <h1 className="question">How active would you like your cat to be?</h1>
                </div>

                <div className="pic-text">
                    <p>
                        Exercise is an important activity for cats, after all, they are felines who wish to stay<br></br>
                        in shape and practice their hunting skills which are part of their nature. Exercise is<br></br> 
                        important to prevent obesity and other conditions associated with it. Even so, some cats<br></br>
                        may be more active than others. This question also takes into account how talkative the<br></br>
                        cat would be.
                    </p>
                    <img src={CatPlay} width="500px"></img>
                </div>

                <a className="fixer" href="#secondQuest">
                    <div className="triple-button">
                        <button onClick={() => setActivity("mellow")}>Slightly active</button>
                        <button onClick={() => setActivity("friendly")}>Fairly active</button>
                        <button onClick={() => setActivity("outgoing")}>Very active</button>
                    </div>
                </a>

                <div className="spacer" id="secondQuest"></div>

            </div>
            : <div></div>
            }

            { activity !== "" ? <div className="theAnimation">
                <div className="number-question">
                    <h1 className="number-circle">3</h1>
                    <h1 className="question">What level of exoticness would you prefer for your cat?</h1>
                </div>

                <div className="pic-text">
                    <img src={CatRare} width="500px"></img>
                    <p>
                        The domestic cat is more diverse today than it has ever been, with between 40 and 70 <br></br>
                        recognized cat breeds available (depending on the registering body you ask). From <br></br>
                        various head and eye shapes to various coat patterns, hues, lengths, and textures.<br></br>
                        The more exotic your choice, the less the selected cats will resemble an average one. 
                    </p>
                </div>

                <a href="#submission" className="fixer">
                    <div className="triple-button">
                        <button onClick={() => setExotic("common")}>Slightly exotic</button>
                        <button onClick={() => setExotic("uncommon")}>Medium exotic</button>
                        <button onClick={() => setExotic("rare")}>Very exotic</button>
                    </div>
                </a>

                <div className="spacer" id="thirdQuest"></div>
                <div className="spacer"></div>
            </div>
            : <div></div>
            }

            { exotic !== "" ? 
                <Link to="/results" className="fixer">
                    <button className="golden-button theAnimation" id="submission" onClick={getCats}>Submit</button>
                </Link>
                
                : <div></div>
            }

            <div className="spacer"></div>

        </React.Fragment>
    );
}

export default Questions