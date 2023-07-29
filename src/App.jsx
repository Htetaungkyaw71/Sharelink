import Detail from "./components/Detail";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/:id" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
