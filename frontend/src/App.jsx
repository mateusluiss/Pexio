//import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";
import Converter from "./routes/Converter.jsx";

function App() {
  //const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/converter" element={<Converter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
