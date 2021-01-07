import "./Stack.css";
import StackItem from "./StackItem";

function Stack() {
  // array of devicons
  const techs = [
    "devicon-css3-plain-wordmark colored",
    "devicon-javascript-plain colored",
    "devicon-html5-plain-wordmark colored",
    "devicon-ruby-plain-wordmark colored",
    "devicon-rails-plain-wordmark colored",
    "devicon-mongodb-plain-wordmark colored",
    "devicon-postgresql-plain-wordmark colored",
    "devicon-bootstrap-plain-wordmark colored",
    "devicon-nodejs-plain-wordmark colored",
    "devicon-express-original-wordmark colored",
    "devicon-react-original-wordmark colored",
    "devicon-amazonwebservices-plain-wordmark colored",
    "devicon-heroku-plain-wordmark colored",
    "devicon-git-plain-wordmark colored",
  ];

  return (
    <section className="stack-container">
      {/* to Be displayed in circle shape */}
      <div className="info-wrapper">
        <div className="text">
          <p>
            <strong>Stack</strong>
            <br />
            Technologies tailored to the task. I use a variety of front-end &
            back-end technologies including CSS, React, Rails, MongoDB,
            PostgreSQL, and more...
          </p>
        </div>
      </div>
      {/* Displayed on larger screens - need to adjust the css so not rendering twice */}
      <div className="icons-container-circle">
        {/* length * 360 gives angle each item will be seperated by.*/}
        {/* Multiplied by index gives position around a circle like bike spokes */}
        {techs.map((tech, idx, array) => {
          const angle = (idx / array.length) * 360;
          return <StackItem angle={angle} key={idx} name={tech} idx={idx} />;
        })}
      </div>
      {/* displayed on smaller screens */}
      <div className="icons-container-square">
        {techs.map((tech, idx) => {
          return <StackItem key={idx} name={tech} idx={idx} />;
        })}
      </div>
    </section>
  );
}

export default Stack;
