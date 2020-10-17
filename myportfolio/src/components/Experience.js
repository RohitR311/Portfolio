import React, { useEffect } from "react";
import "../styles/Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

function Experience() {
  const OnCheckResume = (e) => {};

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  $(() => {
    $(document).scroll(function () {
      var $nav = $(".experience");
      var $exp = $("#exp");
      $exp.toggleClass(
        "activate",
        $(this).scrollTop() > $nav.height() + 1080 &&
          $(this).scrollTop() < $nav.height() + 2270
      );
    });
  });

  return (
    <div className="experience" id="my-exp">
      <div data-aos="fade-in" data-aos-duration="700" className="header">
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quo
          repellendus neque? Et, facilis modi!
        </p>
      </div>
      <div data-aos="fade-in" data-aos-duration="700" className="tech">
        <h3>Some Technologies i've worked with:</h3>
      </div>
      <div data-aos="fade-in" data-aos-duration="700" className="logosexp">
        <img src="./images/Html5.svg" alt="HTML5" />
        <img src="./images/Css3.svg" alt="CSS3" />
        <img src="./images/Sass.svg" alt="Sass" />
        <img src="./images/Python.svg" alt="Python" />
        <img src="./images/Js.svg" alt="JS" />
        <img src="./images/Java.svg" alt="Java" />
        <img src="./images/bootstrap.svg" alt="Bootstrap" />
        <img src="./images/NodeJS.svg" alt="NodeJS" />
        <img src="./images/GitHub.svg" alt="GitHub" />
        <img src="./images/Linux.svg" alt="Linux" />
      </div>
      <div className="bg-image">
        <div className="bg-content">
          <h3>Check Out My Resume!</h3>
          <a data-aos="zoom-in" data-aos-duration="400" href="">
            <button onClick={OnCheckResume}>Grab a Copy</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
