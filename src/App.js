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
      <NavBar />  
      <HomeScreen />
      <AboutMe />
      <Skills />
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
