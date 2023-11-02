import "./styles/NavBar.css"
import Paw from "./images/myPaw.gif"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import React from "react";
import LoginPopup from "./LoginPopup";
import ResultContext from "./context/result-context";

const NavBar = () => {
    const[trigger, setTrigger] = useState(false);
    const {isLoggedIn, setLogged} = useContext(ResultContext);

    let logButton = <button className="admin-button" onClick={() => setTrigger(!trigger)}>Admin Login</button>;

    if(isLoggedIn) {
        logButton = <button className="admin-button" onClick={() => setLogged(false)}>Logout</button>
    }

    return (
        <>
            <div className="nav-box">
                {logButton}
                <Link to="/" className="modified-link"><h1>Favorite Cat Type Finder</h1></Link>
                <img src = {Paw} alt="Paw"width = "75px"/>
            </div>

            <LoginPopup showPop={trigger} changeFunction={setTrigger}></LoginPopup>  
        </>
    );
}

export default NavBar;