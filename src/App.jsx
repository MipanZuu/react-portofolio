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
import "./transitions.css";
import Template from "./Pages/Template/Template";
import InstallmentsPage from "./Pages/Template/InstallmentsPage";
import ThemesPage from "./Pages/Template/ThemesPage";
import HeaderPage from "./Pages/Template/HeaderPage";

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
                    path="/Template"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="Template"
                                classNames="fade"
                                timeout={300}
                            >
                                <Template />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/Template/Installments"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="Installments"
                                classNames="fade"
                                timeout={300}
                            >
                                <InstallmentsPage />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/Template/Themes"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="Theme"
                                classNames="fade"
                                timeout={300}
                            >
                                <ThemesPage />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/Template/Header"
                    element={
                        <TransitionGroup>
                            <CSSTransition
                                key="Header"
                                classNames="fade"
                                timeout={300}
                            >
                                <HeaderPage />
                            </CSSTransition>
                        </TransitionGroup>
                    }
                />
                <Route
                    path="/Technologies"
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
