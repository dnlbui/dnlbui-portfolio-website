import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function HomeScreen() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-fluid" id="homescreen">
      <div className="row">
        <div className="col-12 home-background">
          <div id="lead">
            <div id="lead-content">
              <h1>Daniel Bui</h1>
              <h2>FullStack Software Engineer</h2>
              <a
                href="https://www.linkedin.com/in/dnlbui/"
                target="_blank"
                rel="noopener noreferrer"
                id="my-link"
              >
                <i
                  className="lab la-linkedin-in la-3x"
                  data-aos="zoom-in-up"
                ></i>
              </a>
              <a
                href="https://github.com/dnlbui"
                target="_blank"
                rel="noopener noreferrer"
                id="my-link"
              >
                <i className="lab la-github la-3x" data-aos="zoom-in-up"></i>
              </a>
              <a
                href="mailto:dnlbui@proton.me"
                target="_blank"
                rel="noopener noreferrer"
                id="my-link"
              >
                <i className="lar la-envelope la-3x" data-aos="zoom-in-up"></i>
              </a>
            </div>
            <div id="lead-overlay"></div>
          </div>
          <div id="lead-down">
            <Link rel="nofollow" to="about" spy={true} smooth={true}>
              <span>
                <i className="las la-angle-double-down la-3x"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
