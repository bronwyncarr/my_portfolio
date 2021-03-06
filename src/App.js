import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  // id passed for Nav to link to the section.
  return (
    <div className="App" >
      <Nav id="top"/>
      <Banner />
      <Stack id="stack"/>
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
