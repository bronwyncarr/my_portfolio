import Project from "./Project";
import './Projects.css'

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-container">
        <Project
          name="Waste Me Not"
          pic="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          details="Reduce food waste everyday by using up ingredients before they reach their use-by date."
        />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
