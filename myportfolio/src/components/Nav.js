import React from "react";
import "../styles/Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";

function Nav() {

  $(() => {
    $(document).scroll(function () {
      var $nav = $(".nav-container");
      $nav.toggleClass("scroll", $(this).scrollTop() > $nav.height());
    });
  });

  const openHamMenu = () => {
    document.getElementsByTagName("ul")[0].classList.toggle("open");
  };

  return (
    <div className="nav-container">
      <div className="logo-image">
        <img src="/images/Logo3.png" alt="logo" className="logo-image" />
      </div>
      <div className="nav-contents">
        <div className="nav-title">
          <h2>
            <Link
              to="my-home"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={800}
              delay={400}
              // isDynamic={true}
            >
              Rohit Rajan
            </Link>
          </h2>
        </div>
        <div className="nav-list">
          <ul>
            <Link
              activeClass="activate"
              to="about-me"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              delay={400}
            >
              <li id="abouts">About</li>
            </Link>
            <Link
              activeClass="activate"
              to="my-passion"
              spy={true}
              smooth={true}
              offset={-45}
              duration={500}
              delay={400}
            >
              <li id="passions">Passion</li>
            </Link>
            <Link
              // activeClass="activate"
              to="my-exp"
              spy={true}
              smooth={true}
              offset={-45}
              duration={500}
              delay={400}
            >
              <li id="exp">Experience</li>
            </Link>
            <Link
              // activeClass="activate"
              to="my-works"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              delay={400}
            >
              <li id="works">Work</li>
            </Link>

            <Link
              activeClass="activate"
              to="my-contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              delay={400}
            >
              <li id="contacts">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <button onClick={openHamMenu} className="ham-menu">
        &#9776;
      </button>
    </div>
  );
}

export default Nav;
