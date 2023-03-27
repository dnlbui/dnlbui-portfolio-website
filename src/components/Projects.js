import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

import bastion2 from "../images/bastion2.png";
import portfolio from "../images/dnlbui-portfolio-website.png";
import hotPotato from "../images/hot-potato-game.png";
import productListImage from "../images/product-list.png";

const projectsList = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Thank you for checking out my projects. I am currently working on a project that I will be able to showcase soon. Here are some random cats. I'd love to connect on LinkedIn or Github.",
    tech: "Cats",
    image: "https://loremflickr.com/640/360",
    liveLink: "https://www.linkedin.com/in/dnlbui/",
    githubLink: "https://github.com/dnlbui",
    alt: "Random Cats",
    button1: "Github",
    button2: "LinkedIn",
  },
  {
    id: 2,
    title: "Nail Salon Payroll, Invoicing, and Booking System",
    description:
      "This project is a payroll and booking system that allows the owner to manage employees. Implemented the Stripe API for the customer invoicing.",
    tech: "React, Redux, Node, Express, MongoDB, and Stripe's invoicing API.",
    image: bastion2,
    liveLink: "https://sleepy-bastion-96890.herokuapp.com/",
    githubLink: "https://github.com/dnlbui/lsnail-payroll-app",
    alt: "Nail Salon Payroll, Invoicing, and Booking System",
    button1: "Github",
    button2: "Live Demo",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This is my portfolio website.",
    tech: "React, React-Bootstrap, and AOS.",
    image: portfolio,
    liveLink: "https://dnlbui-portfolio.herokuapp.com/",
    githubLink: "https://github.com/dnlbui/dnlbui-portfolio-website",
    alt: "Portfolio Website",
    button1: "Github",
    button2: "Live Demo",
  },
  {
    id: 4,
    title: "Hotpotato Game",
    description: "This is a 4 player hotpotato game used to learn websockets.",
    tech: "React, Node, Express, and WebSocket API.",
    image: hotPotato,
    liveLink: "",
    githubLink: "https://github.com/dnlbui/hotpotato-websocket-api",
    alt: "Hotpotato Game",
    button1: "Github",
    button2: "Live Demo",
  },
  {
    id: 5,
    title: "Product List",
    description: "This is a simple web application that allows users to view an auto-populated list of products and their details.",
    tech: "React, Redux, Node, Express, Bootstrap, and MongoDB.",
    image: productListImage,
    liveLink: "",
    githubLink: "https://github.com/dnlbui/product-list",
    alt: "Product List",
    button1: "Github",
    button2: "Live Demo"
  }
];

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const ProjectsCards = () => {
    return projectsList.map((project , i) => {
      return (
        <div
          className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center"
          data-aos="fade-up"
          key={i}
        >
          <div className="card">
            {
            project.image.includes("https://loremflickr.com/640/360") ? <img src={project.image} className="card-img-top" alt={project.alt} />  
            :<img src={project.image} className="card-img-top" alt={project.title} /> 
            }
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ backgroundColor: "white" }}>
                <b>Technology</b>
              </li>
              <li className="list-group-item" style={{ backgroundColor: "white" }}>
                {project.tech}
              </li>
            </ul>
            <div className="card-links">
              <div className="card-body" >
                <a href={project.githubLink} className="card-link">
                  {project.githubLink === "" ? "" : `${project.button1}`}
                </a>
                <a href={project.liveLink} className="card-link">
                  {project.liveLink === "" ? "" : `${project.button2}`}
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
