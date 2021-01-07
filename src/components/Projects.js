import Project from "./Project";
import "./Projects.css";
import ProjectData from "./ProjectData";

function Projects({id}) {
  return (
    <section className="projects" id={id}>
      <h1>Projects</h1>
      <div className="project-container">
        {ProjectData.map((project, idx) => (
          <Project {...project} key={idx}/>
        ))}
      </div>
    </section>
  );
}

export default Projects;
