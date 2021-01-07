import "./Project.css";

function Project({ name, details, pic, stack, link }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={pic} alt=""></img>
          <h4>{name}</h4>
          <p>{stack}</p>
        </div>
        <div className="flip-card-back">
          <p>{details}</p>
          <a href={link} rel="noreferrer" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
