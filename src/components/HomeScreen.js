import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function HomeScreen() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="col-12 home-background">
      <div id="lead">
        <div id="lead-content">
          <h1>Daniel Bui</h1>
          <h2>FullStack Software Engineer</h2>
          <i class="lab la-linkedin-in la-3x" data-aos="zoom-in-up"></i>
          <i class="lab la-github la-3x" data-aos="zoom-in-up"></i>
          <i class="lar la-envelope la-3x" data-aos="zoom-in-up"></i>
        </div>
        <div id="lead-overlay"></div>
      </div>
      <div id="lead-down">
            <Link rel="nofollow" to="about" spy={true} smooth={true}>
              <span>
                <i class="las la-angle-double-down la-3x"></i>
              </span>
            </Link>
          </div>
    </div>
  );
}

export default HomeScreen;
