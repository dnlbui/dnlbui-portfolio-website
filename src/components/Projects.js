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
    liveLink: "",
    githubLink: "",
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
    liveLink: "https://sleepy-bastion-96890.herokuapp.com/",
    githubLink: "https://github.com/dnlbui/lsnail-payroll-app",
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
          <div className="card">
            <img src={project.image} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ backgroundColor: "white" }}>
                Technology
              </li>
              <li className="list-group-item" style={{ backgroundColor: "white" }}>
                {project.tech}
              </li>
            </ul>
            <div className="card-links">
              <div className="card-body" >
                <a href={project.githubLink} className="card-link">
                  {project.githubLink === "" ? "" : "Github"}
                </a>
                <a href={project.liveLink} className="card-link">
                  {project.liveLink === "" ? "" : "Live Demo"}
                </a>
              </div>
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
