import React from "react"
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Results from "./Results.js"
import Questions from "./Questions.js"
import Admin from "./Admin.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResultContext from "./context/result-context";

function App() {
  const [catList, setCatList] = useState([]);
  const [isLoggedIn, setLogged] = useState(false);
  const [globalUrl, setGlobalUrl] = useState("https://44027af23211.ngrok.app/")

  return (
    <React.Fragment>
      <ResultContext.Provider value = {{catList, setCatList, isLoggedIn, setLogged, globalUrl}}>
        <NavBar />
    
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/questions" element={<Questions/>}></Route>
          <Route path="/results" element={<Results/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
    </ResultContext.Provider>
    
    </React.Fragment>
  );
}

export default App;
