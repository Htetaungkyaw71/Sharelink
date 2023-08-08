import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Protect from "./components/Protect";
import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home"));
const Detail = lazy(() => import("./components/Detail"));
const Preview = lazy(() => import("./components/Preview"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/:name" element={<Preview />} />
          <Route
            path="/"
            element={
              <Protect>
                <Home />
              </Protect>
            }
          />
          <Route
            path="/detail"
            element={
              <Protect>
                <Detail />
              </Protect>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
