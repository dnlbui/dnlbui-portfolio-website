import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" id="projects" >
      <div
        className="row align-items-center justify-content-center"
        data-aos="zoom-in-up"
        
      >
        <div className="col-md-12 align-self-center">
          <h2 className="heading">
            <i class="las la-laptop-code la-3x"></i> Projects
          </h2>
        </div>

        <div className="col mt-3 align-self-center col-sm-6 col-md-3">
          <div class="card" style={{ width: 230 }}>
            <img
              src="https://loremflickr.com/640/360"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body ">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col mt-3 align-self-center col-sm-6 col-md-3">
          <div class="card" style={{ width: 230 }}>
            <img
              src="https://loremflickr.com/640/360"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col mt-3 align-self-center col-sm-6 col-md-3">
          <div class="card" style={{ width: 230 }}>
            <img
              src="https://loremflickr.com/640/360"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col mt-3 align-self-center col-sm-6 col-md-3">
          <div class="card" style={{ width: 230 }}>
            <img
              src="https://loremflickr.com/640/360"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col mt-3 align-self-center col-sm-6 col-md-3">
          <div class="card" style={{ width: 230 }}>
            <img
              src="https://loremflickr.com/640/360"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col mt-3 align-self-center col-sm-6 col-md-3">
          <div class="card" style={{ width: 230 }}>
            <img
              src="https://loremflickr.com/640/360"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="arrow">
        <Link rel="nofollow" to="skills" spy={true} smooth={true} offset={-100}>
          <span>
            <i class="las la-angle-down la-3x"></i>
          </span>
        </Link>
      </div>

    </div>
  );
}

export default Projects;

{
  /* <div className="arrow">
<Link rel="nofollow" to="projects" spy={true} smooth={true} offset={-100}>
  <span>
    <i class="las la-angle-down la-3x"></i>
  </span>
</Link>
</div> */
}
