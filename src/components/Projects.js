import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" id="projects" data-aos="zoom-in-up" style={{minHeight: "100vh"}}>
      <div className="card-container row justify-content-center" style={{minHeight: "100vh"}}>
        <div className="col-md-12 align-self-center">
          <h2 className="heading">
            <i className="las la-laptop-code la-3x"></i> Projects
          </h2>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
          <div className="card">
            <img
              src="https://loremflickr.com/640/360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="arrow">
        <Link rel="nofollow" to="skills" spy={true} smooth={true}>
          <span>
            <i className="las la-angle-down la-3x"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Projects;

