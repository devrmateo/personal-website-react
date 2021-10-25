import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <nav className="footerNav">
        <NavLink to="/" className="footerNavLink">
          Home
        </NavLink>
        <NavLink to="/resume" className="footerNavLink">
          Resume
        </NavLink>
        <NavLink to="/story" className="footerNavLink">
          My Story
        </NavLink>
      </nav>
      <div className="social">
        <a
          className="socialLink"
          href="https://github.com/devrmateo"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="fab fa-github fa-lg"
            aria-label="menu"
            aria-hidden="true"
            title="Twitter"
          />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          className="socialLink"
          href="https://www.linkedin.com/in/devrmateo/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fab fa-github fa-lg"
            aria-label="menu"
            aria-hidden="true"
            title="Twitter"
          />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          className="socialLink"
          href="https://www.twitter.com/devrmateo/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="fab fa-twitter fa-lg"
            aria-label="menu"
            aria-hidden="true"
            title="Twitter"
          />
        </a>
        <span className="sr-only">Twitter</span>
      </div>

      <div className="copyright">© 2021 Matthew Price Smith</div>
    </footer>
  );
}
