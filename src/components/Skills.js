import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import reduxIcon from "../images/redux.png";
import Footer from "./Footer";
import expressIcon from "../images/express.png";
import mongoDBIcon from "../images/mongoDB.png";

const skills = [
  {
    icon: "lab la-html5 la-3x",
    name: "HTML",
  },
  {
    icon: "lab la-css3-alt la-3x",
    name: "CSS",
  },
  {
    icon: "lab la-js-square la-3x",
    name: "JavaScript",
  },
  {
    icon: "lab la-react la-3x",
    name: "React",
  },
  {
    icon: "lab la-react la-3x",
    name: "React.Native",
  },
  {
    icon: reduxIcon,
    name: "Redux",
  },
  {
    icon: "lab la-bootstrap la-3x",
    name: "Bootstrap",
  },
  {
    icon: "lab la-figma la-3x",
    name: "Figma",
  },
  {
    icon: "lab la-node-js la-3x",
    name: "Node.js",
  },
  {
    icon: expressIcon,
    name: "Express.js",
  },
  {
    icon: mongoDBIcon,
    name: "MongoDB",
  },
  {
    icon: "lab la-git-alt la-3x",
    name: "Git",
  },
  {
    icon: "lab la-github la-3x",
    name: "GitHub",
  },
  {
    icon: "lab la-npm la-3x",
    name: "NPM",
  },
  {
    icon: "lab la-adobe la-3x",
    name: "Adobe.Photoshop",
  },
  {
    icon: "las la-file-export la-3x",
    name: "RESTful.API",
  },

];

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const RenderSkills = () => {
    // Split skills into 8 chunks
    // https://stackoverflow.com/a/8497474
    // .slice() is used to create a copy of the array
    // so that the original array is not mutated
    // first argument is the starting index
    // second argument is the ending index
    // _ is a placeholder for the first argument. It is not used. It is just there to make the code more readable. It is a convention.
    const chunks = skills.slice(0, skills.length / 8 + 1).map((_, i) =>
      skills.slice(i * 8, i * 8 + 8)
    );
    
  
    return chunks.map((chunk, i) => {console.log(chunks);return (
      <ul
        className="list-group list-group-horizontal-xl mt-5"
        data-aos="fade-up"
        key={i}
      >
        {chunk.map((skill, j) => (
          <li className="list-group-item flex-fill" key={`${i}-${j}`}>
            {skill.icon.startsWith("lab") || skill.icon.startsWith("las") ? (
              <i className={skill.icon}></i>
            ) : (
              <img src={skill.icon} alt={`${skill.name} Icon`} />
            )}
            {skill.name}
          </li>
        ))}
      </ul>
    )});
  };

  return (
    <div className="container" id="skills">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-12">
          <h2 className="heading">
            <i className="las la-toolbox la-3x"></i>Skills
          </h2>

          <RenderSkills />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
