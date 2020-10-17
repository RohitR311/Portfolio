import React, { useEffect } from "react";
import "../styles/MyPassion.css";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

function MyPassion() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // $(() => {
  //   $(document).scroll(function () {
  //     var $nav = $(".passion");
  //     $nav.toggleClass("display", $(this).scrollTop() > $nav.height());
  //   });
  // });

  // $(() => {
  //   $(document).scroll(function () {
  //     var $nav = $(".passion");
  //     var $passion = $("#passions");
  //     $passion.toggleClass(
  //       "bg1",
  //       $(this).scrollTop() > $nav.height() + 800 &&
  //         $(this).scrollTop() < $nav.height() + 1600
  //     );
  //   });
  // });

  return (
    <div className="passion" id="my-passion">
      <h2>What I Do</h2>
      <div className="do-logos">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="content-1"
        >
          <div className="do-logo1">
            <img src="./images/Laptop.svg" alt="Laptop" />
          </div>
          <h2>Design</h2>
          <p>
            Design isn't just what a product looks like and feels like on the
            outside. Design encompasses the internal functionality of a product
            as well as the overall user experience. I strive to design
            interfaces and experiences that people can enjoy on all digital
            mediums.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="content-2"
        >
          <div className="do-logo2">
            <img src="./images/Code.svg" alt="Code" />
          </div>
          <h2>Development</h2>
          <p>
            With a strong foundation in computer science, I'm passionate about
            web design and development, and interested in mobile app
            development. As I grow as a developer, I hope to write clean,
            readable code that can be used by others and leveraged to create
            beautiful software.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1600"
          className="content-3"
        >
          <div className="do-logo3">
            <img src="./images/Bulb.svg" alt="Bulb" />
          </div>
          <h2>Involvement</h2>
          <p>
            At Northeastern, I'm currently the web chair for nuWiT (NU Women in
            Tech) as well as a Teaching Assistant for the undergrad HCI course.
            Previously, I've been involved with the club water polo team, the
            resident student association, and the ski and snowboard club
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPassion;
