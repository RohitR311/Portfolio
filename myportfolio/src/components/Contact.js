import React, { useEffect } from "react";
import "../styles/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

function Contact() {
  const OnClickContact = (e) => {};

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // $(() => {
  //   $(document).scroll(function () {
  //     var $nav = $(".contact");
  //     var $contacts = $("#contacts");
  //     $contacts.toggleClass(
  //       "bg1",
  //       $(this).scrollTop() > $nav.height() + 3960 &&
  //         $(this).scrollTop() < $nav.height() + 5000
  //     );
  //   });
  // });

  return (
    <div className="contact" id="my-contact">
      <img
        data-aos="fade-down"
        data-aos-duration="800"
        src="./images/contact.svg"
        alt=""
      />
      <h3>Get in Touch!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis
        corporis facilis autem dolores ex modi quasi architecto ipsum officiis!
      </p>
      <a href="mailto:rohit.rajan31101@gmail.com?subject=your title&body=TThe message">
        <button onClick={OnClickContact}>Say Hello</button>
      </a>
    </div>
  );
}

export default Contact;
