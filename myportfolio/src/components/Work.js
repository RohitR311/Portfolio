import React, { useEffect } from "react";
import "../styles/Work.css";
import $ from "jquery";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Work() {

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  $(() => {
    $(document).scroll(function () {
      var $nav = $(".experience");
      var $works = $("#works");
      $works.toggleClass(
        "activate",
        $(this).scrollTop() > $nav.height() + 2255 &&
          $(this).scrollTop() < $nav.height() + 3100
      );
    });
  });

  $(document).ready(function () {
    var $plus1 = $(".plus1");
    var $plus2 = $(".plus2");
    var $plus3 = $(".plus3");
    var $plus4 = $(".plus4");
    var $des1 = $(".des1");
    var $des2 = $(".des2");
    var $des3 = $(".des3");
    var $des4 = $(".des4");
    $(".work-1").hover(function () {
      $plus1.toggleClass("plusser") && $des1.toggleClass("descp");
    });

    $(".work-2").hover(function () {
      $plus2.toggleClass("plusser") && $des2.toggleClass("descp");
    });

    $(".work-3").hover(function () {
      $plus3.toggleClass("plusser") && $des3.toggleClass("descp");
    });

    $(".work-4").hover(function () {
      $plus4.toggleClass("plusser") && $des4.toggleClass("descp");
    });
  });

  return (
    <div className="work" id="my-works">
      <h2>What i've done</h2>
      <p>(more coming soon)</p>

      <div className="work-img">
        <div className="work-img1">
          <img src="./images/WPlus-search.png" className="plus1" alt="" />
          <Link to="">
            <img src="./images/Chess_Timer.png" alt="" className="work-1" />
          </Link>
          <p className="des1">Chess Timer</p>
        </div>

        <div className="work-img2">
          <img src="./images/WPlus-search.png" className="plus2" alt="" />
          <Link to="">
            <img src="./images/Color-Game.png" alt="" className="work-2" />
          </Link>
          <p className="des2">Color Game</p>
        </div>

        <div className="work-img3">
          <img src="./images/WPlus-search.png" className="plus3" alt="" />
          <Link to="">
            <img src="./images/Cuisine.png" alt="" className="work-3" />
          </Link>
          <p className="des3">Cuisine</p>
        </div>

        <div className="work-img4">
          <img src="./images/WPlus-search.png" className="plus4" alt="" />
          <Link to="">
            <img src="./images/Stop-Watch.png" alt="" className="work-4" />
          </Link>
          <p className="des4">Stop-Watch</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
