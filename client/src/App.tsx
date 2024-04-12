import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../src/pages/Home"));
const SignIn = lazy(() => import("../src/pages/SignIn"));
const Passwords = lazy(() => import("../src/pages/Passwords"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/passwords" element={<Passwords />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
