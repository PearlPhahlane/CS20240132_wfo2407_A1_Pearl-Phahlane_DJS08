import React from "react"; //had to import to debug and to use JSX
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //import components from react-router-dom
import Home from "./pages/Home"; 
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetails";



function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} /> {/*route Params*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
