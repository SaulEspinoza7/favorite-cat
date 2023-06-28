import React from "react";
import "./styles/CatComponent.css";

const CatComponent = (props) => {
    return (
        <div className="cat-box">
            <img src={require("./images/" + props.id + ".jpg")} width="275px"></img>
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
                <p> <div className="text-presenter">Description:</div> {props.description}</p>
            </div>
        </div>
    );
}

export default CatComponent;