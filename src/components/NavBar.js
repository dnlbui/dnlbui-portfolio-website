import { Link } from "react-scroll";

function NavBar() {
  return (
    <header>
      <ul className="shadow" id="menu">
        <li>
          <Link rel="nofollow" to="about" spy={true} smooth={true}>
            <i className="las la-user-ninja la-1x"></i> About
          </Link>
        </li>
        <li>
          <Link rel="nofollow" to="projects" spy={true} smooth={true}>
            <i className="las la-laptop-code la-1x"></i> Projects
          </Link>
        </li>
        <li>
          <Link rel="nofollow" to="skills" spy={true} smooth={true}>
            <i className="las la-toolbox la-1x"></i> Skills
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
