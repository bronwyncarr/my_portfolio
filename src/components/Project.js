import "./Project.css";

function Project({ name, details, pic, stack, link}) {

  return (
    <div className="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={pic} alt=""></img>
          <h4>{name}</h4>
          <p>{stack}</p>
        </div>
        <div class="flip-card-back">
          <p>{details}</p>
          <a href={link} rel="noreferrer" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Project;
