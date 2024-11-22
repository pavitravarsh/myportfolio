import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import "./App.css";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

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
                <Projects />
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
