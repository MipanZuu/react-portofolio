import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import "./transitions.css";
import Template from "./Pages/Template/Template";
import InstallmentsPage from "./Pages/Template/InstallmentsPage";
import ThemesPage from "./Pages/Template/ThemesPage";
import HeaderPage from "./Pages/Template/HeaderPage";
import Greetings from "./Pages/Greetings";
import Chatbot from "./Pages/chatbox";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirect from "/" to "/Home" */}
        <Route path="/" element={<Navigate to="/Home" replace />} />

        {/* Home Route */}
        <Route
          path="/Home"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={300}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        {/* About Route */}
        <Route
          path="/about"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={300}>
                <About />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        {/* Contact Route */}
        <Route
          path="/contact"
          element={
            <TransitionGroup>
              <CSSTransition key="contact" classNames="fade" timeout={300}>
                <Contact />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        {/* Projects Route */}
        <Route
          path="/projects"
          element={
            <TransitionGroup>
              <CSSTransition key="projects" classNames="fade" timeout={300}>
                <Projects />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        {/* Template Routes */}
        <Route
          path="/Template"
          element={
            <TransitionGroup>
              <CSSTransition key="Template" classNames="fade" timeout={300}>
                <Template />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/Template/Guides/Installments"
          element={
            <TransitionGroup>
              <CSSTransition key="installments" classNames="fade" timeout={300}>
                <InstallmentsPage />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/Template/Guides/Themes"
          element={
            <TransitionGroup>
              <CSSTransition key="themes" classNames="fade" timeout={300}>
                <ThemesPage />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/Template/Components/Header"
          element={
            <TransitionGroup>
              <CSSTransition key="header" classNames="fade" timeout={300}>
                <HeaderPage />
              </CSSTransition>
            </TransitionGroup>
          }
        />

        {/* Technologies Route */}
        <Route
          path="/Technologies"
          element={
            <TransitionGroup>
              <CSSTransition key="technologies" classNames="fade" timeout={300}>
                <Technologies />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
      <Footer />
      {showWelcome && (
        <div className="absolute inset-0 z-50">
          <Greetings onComplete={() => setShowWelcome(false)} />
        </div>
      )}
      <Chatbot />
    </Router>
  );
}

export default App;
