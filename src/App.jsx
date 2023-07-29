import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Suspense, lazy } from "react";
import img from "./assets/link.png";

const Home = lazy(() => import("./components/Home"));
const Detail = lazy(() => import("./components/Detail"));
const Preview = lazy(() => import("./components/Preview"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center items-center pt-60">
            <img src={img} alt="loader" className="w-10 h-10 animate-spin" />
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/:id" element={<Preview />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
