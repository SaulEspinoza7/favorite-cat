import React, { useState } from "react";
import "./styles/CatComponent.css";
import Axios from "axios";

const CatComponent = (props) => {
    const [editing, setEditing] = useState(false);
    const [textInput, setTextInput] = useState("");

    const updateCat = (event) => {
        event.preventDefault();

        const myInput = textInput;
    
        Axios.put('https://193595b265fa.ngrok.app/update/' + props.id, {
            myInput, 
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        }).then((response) => {
            console.log("Success on updating")
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="cat-box">
            <img src={require("./images/" + props.id + ".jpg")} width="290px"></img>
            
            <div className="cat-text-margin">
            <h2>{props.name}</h2>

            <div className="text-lines">
                <p className="text-presenter">Grooming:&nbsp;</p>

                <p>{props.grooming}</p>
            </div>

            <div className="text-lines">
                <p className="text-presenter">Exoticness:&nbsp;</p>

                <p>{props.exoticness}</p>
            </div>

            <div className="text-lines">
                <div>
                    <div className="text-presenter">Description: 
                    {props.change ? <button onClick={() => setEditing(!editing)}>Edit</button> : <></>}
                    </div> 
                    
                    {editing ? 
                    <form>
                        <textarea rows="14" cols="34" onChange={(e) => setTextInput(e.target.value)} defaultValue={props.description}></textarea>
                        <input type="submit" onClick={updateCat}></input>
                    </form> : 
                    <div>{props.description}</div>}
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default CatComponent;