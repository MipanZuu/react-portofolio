import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Template from "./Pages/Template/Template";
import InstallmentsPage from "./Pages/Template/InstallmentsPage";
import ThemesPage from "./Pages/Template/ThemesPage";
import HeaderPage from "./Pages/Template/HeaderPage";
import Greetings from "./Pages/Greetings";
import "./transitions.css";
import HikingPage from "./Pages/Hobby/hiking";

function AnimatedRoutes() {
  const location = useLocation(); // Required for animation transitions
  const pagesWithoutTransition = ["/hiking"];
  return (
    <>
      {pagesWithoutTransition.includes(location.pathname) ? (
        // Directly render pages without animation
        <Routes location={location}>
          <Route path="/hiking" element={<HikingPage />} />
        </Routes>
      ) : (
        // Apply transition effects to other pages
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Technologies" element={<Technologies />} />
              <Route path="/Template" element={<Template />} />
              <Route
                path="/Template/Guides/Installments"
                element={<InstallmentsPage />}
              />
              <Route path="/Template/Guides/Themes" element={<ThemesPage />} />
              <Route
                path="/Template/Components/Header"
                element={<HeaderPage />}
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      )}
    </>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Denta's Portfolio</title>
          <meta
            name="description"
            content="Explore my portfolio showcasing my projects, skills, hobbies, and technologies I work with."
          />
          <meta
            name="keywords"
            content="portfolio, developer, projects, skills, react, fullstack, denta bramasta hidayat"
          />
          <meta property="og:title" content="My Portfolio" />
          <meta
            property="og:description"
            content="Explore my projects and skills."
          />
          <meta
            property="og:image"
            content="https://yourwebsite.com/preview-image.jpg"
          />
          <meta property="og:url" content="https://dentabramasta.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <Header />
        <AnimatedRoutes />
        <Footer />

        {showWelcome && (
          <div className="absolute inset-0 z-50">
            <Greetings onComplete={() => setShowWelcome(false)} />
          </div>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;
