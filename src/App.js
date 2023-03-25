import "./App.css";
import NavBar from "./components/NavBar.js";
import HomeScreen from "./components/HomeScreen";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
