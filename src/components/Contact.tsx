import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ankit.pathani47@gmail.com" data-cursor="disable">
                ankit.pathani47@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:8264073848" data-cursor="disable">
                8264073848
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/ankit-pathani-20b252146/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100061353760503"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ankit_pathani/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Education <br /> <span>Mass Communication & <br/> Journalism</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
