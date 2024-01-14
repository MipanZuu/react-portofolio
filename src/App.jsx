// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import "./transitions.css"; // Import the CSS file

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="home"
                                classNames="fade"
                                timeout={300}
                            >
                                <Home />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="about"
                                classNames="fade"
                                timeout={300}
                            >
                                <About />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="contact"
                                classNames="fade"
                                timeout={300}
                            >
                                <Contact />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="projects"
                                classNames="fade"
                                timeout={300}
                            >
                                <Projects />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/technologies"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="technologies"
                                classNames="fade"
                                timeout={300}
                            >
                                <Technologies />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
