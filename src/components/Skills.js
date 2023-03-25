import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import reduxIcon from "../images/redux.png";
import Footer from "./Footer";
import expressIcon from "../images/express.png";
import mongoDBIcon from "../images/mongoDB.png";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" id="skills">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-12">
          <h2 className="heading">
            <i className="las la-toolbox la-1x"></i>Skills
          </h2>
          <ul
            className="list-group list-group-horizontal-xl mt-5"
            data-aos="zoom-in-up"
          >
            <li className="list-group-item flex-fill">
              <i className="lab la-html5 la-3x"></i> HTML
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-css3-alt la-3x"></i>CSS
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-js-square la-3x"></i>JavaScript
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-react la-3x"></i>React
            </li>
            <li className="list-group-item">
              <i className="lab la-react la-3x"></i>React.Native
            </li>
            <li className="list-group-item flex-fill">
              <img src={reduxIcon} alt="Redux Icon" /> Redux
            </li>
            <li className="list-group-item flex-fill">
              {" "}
              <i className="lab la-bootstrap la-3x"></i>Bootstrap
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-figma la-3x"></i>Figma
            </li>
          </ul>

          <ul
            className="list-group list-group-horizontal-xl mt-5"
            data-aos="zoom-in-up"
          >
            <li className="list-group-item flex-fill">
              <img src={expressIcon} alt="Redux Icon" /> Express.js
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-node la-3x"></i>Node
            </li>
            <li className="list-group-item flex-fill">
              <img src={mongoDBIcon} alt="Redux Icon" />
              MongoDB
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-github la-3x"></i>Git/GitHub
            </li>

            <li className="list-group-item flex-fill">
              <i className="las la-file-export la-3x"></i>RESTful.APIs
            </li>
            <li className="list-group-item flex-fill">
              <i className="lab la-adobe la-3x"></i>Adobe.Photoshop
            </li>
            <li className="list-group-item">
              <i className="lab la-adobe la-3x"></i>Adobe.LightRoom
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
