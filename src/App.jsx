import React from "react"; //had to import to debug and to use JSX
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //import components from react-router-dom
import Home from "./pages/Home"; 
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
