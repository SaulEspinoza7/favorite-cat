import React, { useContext } from "react";
import ResultContext from "./context/result-context";
import CatComponent from "./CatComponent";
import "./styles/Results.css";

const Results = () => {
    const {catList, setCatList} = useContext(ResultContext);

    return (
        <React.Fragment>
            <h1 className="result-title">Your List of Breeds</h1>

            <div className="my-spacer"></div>

            <div className="cat-elements">
                {catList.map(cat => <CatComponent key={cat.id} id={cat.id} name = {cat.catName} grooming = {cat.grooming} exoticness = {cat.exoticness} description = {cat.description} change = {false}></CatComponent>)}
            </div>
        </React.Fragment>
    );
}

export default Results;