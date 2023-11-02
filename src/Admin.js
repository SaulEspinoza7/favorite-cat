import React, {useContext} from "react";
import ResultContext from "./context/result-context";
import CatComponent from "./CatComponent";
import "./styles/Results.css";

const Admin = () => {
    const {catList, setCatList, isLoggedIn} = useContext(ResultContext);

    return (
        <>
            {isLoggedIn ? <div className="cat-elements">
            {catList.map(cat => <CatComponent key={cat.id} id={cat.id} name = {cat.catName} grooming = {cat.grooming} exoticness = {cat.exoticness} description = {cat.description} change = {true}></CatComponent>)}
            </div> : <h1>Error, please log in</h1>}
        </>
    );
}

export default Admin;