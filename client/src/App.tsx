import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Spinner from "./components/Fallback/Spinner";
import IsAuthenticated from "./components/protect/IsAuthenticated";

const Home = lazy(() => import("../src/pages/Home"));
const SignIn = lazy(() => import("../src/pages/SignIn"));
const Passwords = lazy(() => import("../src/pages/Passwords"));

function App() {
  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route element={<IsAuthenticated />}>
              <Route path="/" element={<Home />} />
              <Route path="/passwords" element={<Passwords />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
