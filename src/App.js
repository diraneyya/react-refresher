import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Counter from "./components/Counter";
import ApiFetch from "./components/ApiFetch";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/api-fetch" element={<ApiFetch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
