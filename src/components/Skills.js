import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import reduxIcon from "../images/redux.png";
import Footer from "./Footer";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" id="skills" data-aos="zoom-in-up">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-12">
          <h2 className="heading">
            <i class="las la-toolbox la-1x"></i>Skills
          </h2>
          <ul class="list-group list-group-horizontal-xl ">
            <li class="list-group-item flex-fill">
              <i class="lab la-html5 la-3x"></i> HTML
            </li>
            <li class="list-group-item flex-fill">
              <i class="lab la-css3-alt la-3x"></i>CSS
            </li>
            <li class="list-group-item flex-fill">
              <i class="lab la-js-square la-3x"></i>JavaScript
            </li>
            <li class="list-group-item flex-fill">
              <i class="lab la-react la-3x"></i>React
            </li>
            <li class="list-group-item flex-fill">
              <img src={reduxIcon} alt="Redux Icon" /> Redux
            </li>
            <li class="list-group-item flex-fill">
              {" "}
              <i class="lab la-bootstrap la-3x"></i>Bootstrap
            </li>
            <li class="list-group-item flex-fill">
              <i class="lab la-figma la-3x"></i>Figma
            </li>
          </ul>
          <ul class="list-group list-group-horizontal-xl">
            <li class="list-group-item flex-fill">
              <i class="lab la-node la-3x"></i>Node
            </li>
            <li class="list-group-item flex-fill">
              <i class="lab la-github la-3x"></i>Git/GitHub
            </li>
            <li class="list-group-item">
              <i class="lab la-react la-3x"></i>React.Native
            </li>
            <li class="list-group-item flex-fill">
              <i class="las la-file-export la-3x"></i>RESTful.APIs
            </li>
            <li class="list-group-item flex-fill">
              <i class="lab la-adobe la-3x"></i>Adobe.Photoshop
            </li>
            <li class="list-group-item">
              <i class="lab la-adobe la-3x"></i>Adobe.LightRoom
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
