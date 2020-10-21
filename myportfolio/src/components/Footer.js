import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="foot-imgs">
        <a href="https://www.facebook.com/rohit.rajan.9047/">
          <img src="./images/Facebook.svg" alt="" />
        </a>
        <a href="https://twitter.com/RohitRa18513329">
          <img src="./images/Twitter.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/rohit.rajan333/">
          <img src="./images/Insta.svg" alt="" />
        </a>
        <a href="#">
          <img src="./images/Spotify.svg" id="bad" alt="" />
        </a>
        <a href="#">
          <img src="./images/Code-Pen.svg" id="vbad" alt="" />
        </a>
        <a href="https://github.com/RohitR311/">
          <img src="./images/GitHub.svg" id="verybad" alt="" />
        </a>
        <a href="https://www.linkedin.com/feed/?trk=onboarding-landing">
          <img src="./images/LinkedIn.svg" alt="" />
        </a>
      </div>
      <div className="copy-right">
        <blockquote>&#169; Rohit Rajan 2020</blockquote>
      </div>
    </div>
  );
}

export default Footer;
