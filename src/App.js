import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <About />
                <Skills />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route
            path="/Skills"
            element={
              <>
                <Skills />
                <Footer />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/Projects"
            element={
              <>
                <p_name />
                <Projects />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
