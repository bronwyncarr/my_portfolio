import './Project.css'

function Project({ name, details, pic}) {
  return (
    <div className="project">
      <img src={pic} alt=""></img>
      <h4>{name}</h4>
      <p>{details}</p>
    </div>
  )
}

export default Project