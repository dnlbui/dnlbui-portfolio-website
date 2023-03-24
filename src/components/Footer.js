import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">© 2023 Daniel Bui Inc</span>
        </div>

        <Link rel="nofollow" to="homescreen" spy={true} smooth={true}>
          <span>
            <i class="las la-angle-double-up la-3x"></i>
          </span>
        </Link>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted"
              aria-label="github"
              draggable="false"
              href="https://github.com/dnlbui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="lab la-github la-2x"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              aria-label="linkedin"
              draggable="false"
              href="https://linkedin.com/in/dnlbui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="lab la-linkedin-in la-2x"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              aria-label="gmail"
              draggable="false"
              href="mailto:dnlbui@proton.me?Subject=Hey Daniel, "
              rel="noopener noreferrer"
            >
              <i className="las la-envelope la-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
