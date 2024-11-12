import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //import components from react-router-dom


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
