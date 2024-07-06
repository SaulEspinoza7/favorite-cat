import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css"
import Cat from "./images/welcomeCat.png"
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="home-elements row">
                    <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                        <img src={Cat} width="575px" alt="Welcoming Cat"></img>
                        <p>This application contains a large database of cat breeds that can
                        match your preferences depending on the answers that you provide.
                        Feeling like adopting a specific cat? Take the quiz and find out
                        the breed of your next friend!<br></br>
                        -made by Saul E
                        </p>
                    </div>
                </div>
            

                <div className="home-button">
                    <Link to="/questions">
                        Take The Quiz
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Home;