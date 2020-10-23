import React from "react";
import "../styles/Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";

function Nav() {

  // $(() => {
  //   $(document).scroll(function () {
  //     var $nav = $(".nav-container");
  //     $nav.toggleClass("scroll", $(this).scrollTop() > $nav.height());
  //   });
  // });

  window.addEventListener('scroll',() => {
    let nav = document.querySelector(".nav-container");
    nav.classList.toggle("scroll",window.scrollY > 0)
  })

  const openHamMenu = () => {
    document.getElementsByTagName("ul")[0].classList.toggle("open");
  };

  const closeHamMenu = () => {
    document.getElementsByTagName("ul")[0].classList.remove("open");
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
              <li onClick={closeHamMenu} id="abouts">About</li>
            </Link>
            <Link
              activeClass="activate"
              to="my-passion"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              delay={400}
            >
              <li onClick={closeHamMenu} id="passions">Passion</li>
            </Link>
            <Link
              // activeClass="activate"
              to="my-exp"
              spy={true}
              smooth={true}
              offset={-15}
              duration={500}
              delay={400}
            >
              <li onClick={closeHamMenu} id="exp">Experience</li>
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
              <li onClick={closeHamMenu} id="works">Work</li>
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
              <li onClick={closeHamMenu} id="contacts">Contact</li>
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
