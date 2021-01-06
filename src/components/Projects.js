import Project from "./Project";
import "./Projects.css";
import ProjectData from "./ProjectData";

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-container">
        {ProjectData.map((project, idx) => (
          <Project {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
