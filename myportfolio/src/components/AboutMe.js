import React, {useEffect} from "react";
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempore
        aut corporis at accusantium enim, fuga eius quia a magnam? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nobis, eaque explicabo
        harum error animi quis odio temporibus reiciendis iste unde officia
        provident exercitationem illum, illo necessitatibus. Culpa dolorem quia
        blanditiis. <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
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
