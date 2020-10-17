import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyPassion from "./components/MyPassion";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
            <AboutMe />
            <MyPassion />
            <Experience />
            <Work />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
