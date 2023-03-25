import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container" id="about" style={{ height: "100vh" }}>
      <div
        className="row align-items-center"
        data-aos="zoom-in-up"
        style={{ height: "100vh" }}
      >
        <div className="col-md-4 ">
          <h2 className="heading">
            <i className="las la-user-ninja la-3x"></i> About Me
          </h2>
          <a
            aria-label="resume"
            draggable="false"
            href="https://github.com/dnlbui/resume/blob/main/Daniel%20Bui%20Resume%202023%203-16-2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rounded-white"
          >
            My Resume
          </a>
        </div>
        <div className="col-md-8" id="about-desc">
          <p>
            In 2020 I was curious about blockchain after listening to a podcast,
            Crypto 101. Since then, smart contracts exposed me to decentralized
            finance. What sparked my interest was how decentralized finance is
            inclusive and opens opportunity in emerging and evolving established
            markets.
          </p>
          <p>
            With my new interest in finance, I joined Fidelity. I gained
            valuable interpersonal skills at Fidelity. I assisted customers with
            withdrawing 401k's, taking out loans, and quickly triaged urgent
            problems the customers presented. With this experience and
            confidence gained. I felt the push to pursue my passion in
            technology, where I've always been weary about until I started
            networking and gained encouragement and advice.
          </p>
          <p>
            In 2022, I attended Consensus, Algorand Developer Portal, and Reach
            Summit. In 2023, I've been shadowing Shardeum developers and I
            attend local developer meet-ups in Dallas. My goal is to get a
            professional job in tech and provide value to an organization that
            provides me with the opportunity.
          </p>
          <div className="arrow">
            <Link rel="nofollow" to="projects" spy={true} smooth={true} offset={-280}>
              <span>
                <i className="las la-angle-down la-3x"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
