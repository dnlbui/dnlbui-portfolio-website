import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const projectsList = [
  {
    id: 1,
    key: 1,
    title: "Project 1",
    description:
      "This is not a project. Wanted to show random cat photos before you check out my projects.",
    tech: "Cats",
    image: "https://loremflickr.com/640/360",
    link: "https://www.linkedin.com/in/dnlbui/",
    alt: "Random Cats",
    button1: "Github",
    button2: "Live Demo",
  },
  {
    id: 2,
    key: 2,
    title: "Nail Salon Payroll, Invoicing, and Booking System",
    description:
      "This project is a payroll and booking system that allows the owner to manage employees. Implemented the Stripe API for the customer invoicing.",
    tech: "React, Redux, Node, Express, MongoDB, and Stripe's invoicing API.",
    image: "https://loremflickr.com/640/360",
    link: "https://sleepy-bastion-96890.herokuapp.com/",
    alt: "Nail Salon Payroll, Invoicing, and Booking System",
    button1: "Github",
    button2: "Live Demo",
  },
];

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const ProjectsCards = () => {
    return projectsList.map((project) => {
      return (
        <div
          className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center"
          data-aos="fade-up"
          key={project.key}
        >
          <div class="card">
            <img src={project.image} class="card-img-top" alt={project.title} />
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">
                {project.description}
              </p>
            </div>
            <ul class="list-group list-group-flush" >
              <li class="list-group-item" style={{backgroundColor: "white"}}>Technology</li>
              <li class="list-group-item" style={{backgroundColor: "white"}}>{project.tech}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                GitHub
              </a>
              <a href="#" class="card-link">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container" id="projects">
      <div
        className="card-container row justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-12 align-self-center">
          <h2 className="heading">
            <i className="las la-laptop-code la-3x"></i> Projects
          </h2>
        </div>
        <div className="row">
          <ProjectsCards />
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
