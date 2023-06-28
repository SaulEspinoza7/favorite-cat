import React from "react"
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Results from "./Results.js"
import Questions from "./Questions.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResultContext from "./context/result-context";

function App() {
  const [catList, setCatList] = useState([]);

  return (
    <React.Fragment>
    <NavBar />
    
      
    <ResultContext.Provider value = {{catList, setCatList}}>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/questions" element={<Questions/>}></Route>
        <Route path="/results" element={<Results/>}></Route>
        </Routes>
    </ResultContext.Provider>
    
    </React.Fragment>
  );
}

export default App;
