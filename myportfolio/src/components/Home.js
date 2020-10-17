import React from "react";
import "../styles/Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  return (
    <div className="home" id="my-home">
      <div className="home-intro">
        <h1>Hi, I'm Rohit</h1>
        <h3>Web developer & LifeLong Learner</h3>
        <Link
          to="about-me"
          spy={true}
          smooth={true}
          // offset={-50}
          delay={400}
          duration={500}
        >
          <span>^</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
