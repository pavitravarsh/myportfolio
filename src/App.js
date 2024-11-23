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
import { ThemeProvider } from "./components/ThemeContext";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
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
                  <Contact />
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
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
