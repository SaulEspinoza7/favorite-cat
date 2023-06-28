import "./styles/NavBar.css"
import Paw from "./images/myPaw.gif"

const NavBar = () => {
    return (
        <div className="nav-box">
            <h1>Favorite Cat Type Finder</h1>
            <img src = {Paw} width = "75px"/>
        </div>
    );
}

export default NavBar;