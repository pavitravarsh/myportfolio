import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import "./App.css";
import Projects from "./components/Projects";
import { ThemeProvider } from "./components/ThemeContext";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";

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
                </>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
