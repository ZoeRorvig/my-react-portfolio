import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Resume from "./components/pages/Resume";
import About from "./components/pages/About";
import Header from "./components/Header";
import Footer from "./components/pages/Footer";
import Portfolio from "./components/pages/Portfolio";

function App () {
    return (
        <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </HashRouter>
    )
}

export default App;