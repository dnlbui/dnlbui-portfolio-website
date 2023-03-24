import "./App.css";
import NavBar from "./components/NavBar.js";
import HomeScreen from "./components/HomeScreen";
import AboutMe from "./components/AboutMe";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
        <div className="row">
          <HomeScreen />
        </div>  
      </div>

      <div className="container justify-content-center" id="about" style={{ height: "100vh" }}>
        <AboutMe />
      </div>

      <div className="container" id="about" style={{ height: "100vh" }}>
        <div className="row mt-5">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;

/*       <div className="row mt-5">
        <Projects />
      </div> */

/*       <div className="row mt-5">
        <Footer />
      </div> */
