import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css"
import Cat from "./images/welcomeCat.png"
import Axios from "axios";
import { useState } from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="home-elements">
                <img src={Cat} width="600px"></img>
                <p>This application contains a large database of cat breeds that can<br></br>
                   match your preferences depending on the answers that you provide.<br></br>
                   Feeling like adopting a specific cat? Take the quiz and find out<br></br>
                   the breed of your next friend!<br></br>
                   -made by Saul E
                </p>
            </div>

            <div className="home-button">
                <Link to="/questions">
                    Take The Quiz
                </Link>
            </div>
            
        </div>
    );
}

export default Home;