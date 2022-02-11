import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import AboutMe from "./portafolioContainer/AboutMe/AboutMe";
import Contact from "./portafolioContainer/Contact/Contact";
import Home from "./portafolioContainer/Home/Home";
import Navbar from "./portafolioContainer/Navbar/Navbar";
import Projects from "./portafolioContainer/projects/Projects";
import Footer from "./portafolioContainer/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-mi" exact component={AboutMe} />

          <Route path="/contact" exact component={Contact} />
          
          <Route path="/projects" exact component={Projects} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
