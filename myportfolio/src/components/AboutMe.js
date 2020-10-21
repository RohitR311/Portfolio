import React, { useEffect } from "react";
import "../styles/AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // $(() => {
  //   $(document).scroll(function () {
  //     var $nav = $(".aboutMe");
  //     var $about = $("#abouts");
  //     console.log($nav.height());
  //     $about.toggleClass(
  //       "bg1",
  //       $(this).scrollTop() > $nav.height() - 200 &&
  //         $(this).scrollTop() < $nav.height() + 700
  //     );
  //   });
  // });

  return (
    <div className="aboutMe" id="about-me">
      <h1>A little bit about me</h1>
      <img
        data-aos="fade-in"
        data-aos-duration="1000"
        src="./images/My-Photo-edit.jpeg"
        alt="Myself"
      />
      <p>
        Hey! My name is Rohit and I'm a Web Developer with a passion for front
        end development and design. I'm currently a second year student at Terna
        College of Engineering(TEC) pursuing a degree in Computer Engineering. I
        aspire toward a career that will allow me to channel my creativity
        through crafting beautiful software and engaging experiences. <br />{" "}
        <br />
        When I'm not on the computer, I enjoy reading books, swimming, and solving cubes.
      </p>

      <div className="details">
        <h2>tl;dr? self proclamations:</h2>
        <div className="logos">
          <div className="logo-1">
            <img src="/images/Keyboard.svg" alt="keyboard" />
            <blockquote>Web Developer</blockquote>
          </div>
          <div className="logo-2">
            <img src="/images/Avid-Reader.svg" alt="reader" />
            <blockquote>Avid Reader</blockquote>
          </div>
          <div className="logo-3">
            <img src="/images/Swimmer.svg" alt="swimmer" />
            <blockquote>Swimmer</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
