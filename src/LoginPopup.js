import "./styles/LoginPopup.css"
import React, {useContext, useState} from "react";
import ResultContext from "./context/result-context";
import Axios from "axios";
import {useNavigate, userNavigate} from "react-router-dom";

const LoginPopup = (props) => {
    const {catList, setCatList, isLoggedIn, setLogged, globalUrl} = useContext(ResultContext);
    const [userAttempt, changeAttempt] = useState("");
    const navigate = useNavigate();

    const writePassword = (event) => {
        changeAttempt(event.target.value);
    };

    // useEffect can be used instead here
    const getAllCats = () => {
        console.log("Getting all cats as ")

        Axios.get(globalUrl + 'all-cats' , {
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        }).then((response) => {
            setCatList(response.data);
            console.log("Check")
        }).catch((error) => {
            console.log(error)
        });
    }

    const authenticateAdmin = (event) => {
        event.preventDefault();
        const myuserAttempt = userAttempt;
        
        console.log("Authenticating from frontend...");
        console.log(myuserAttempt);

        Axios.get(globalUrl + 'admin', {
            params: {
                myuserAttempt
            }, 
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        }).then((response) => {
            setLogged(response.data)
            console.log(response.data)

            if(response.data) {
                getAllCats();
                navigate('/admin');
                props.changeFunction(false);
            }
        }).catch((error) => {
            console.log(error)
        });
    };
    
    return (props.showPop) ? (
        <div className="login-popup">
            <div className="square-popup">
                <h1>Authenticate as Admin</h1>

                <form onSubmit={authenticateAdmin}>
                    <label>Password</label>
                    <input type="password" onChange={writePassword}></input>
                    <div className="spacer"></div>

                    <div className="pop-buttons">
                        <button onClick={() => props.changeFunction(false)} type="button" className="pop-cancel">Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    ) : <div></div>;
}

export default LoginPopup;