import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import AboutMe from "./portafolioContainer/AboutMe/AboutMe";
import Contact from "./portafolioContainer/Contact/Contact";
import Home from "./portafolioContainer/Home/Home";
import Navbar from "./portafolioContainer/Navbar/Navbar";
import Projects from "./portafolioContainer/projects/Projects";
import Footer from "./portafolioContainer/Footer/Footer";
import Habillity from "./portafolioContainer/habillity/Habillity";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/about-mi" exact component={AboutMe} />

            <Route path="/contact" exact component={Contact} />

            <Route path="/hability" exact component={Habillity} />

            <Route path="/projects" exact component={Projects} />
          </div>
        </Switch>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
