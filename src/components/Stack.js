import "./Stack.css";
import StackItem from "./StackItem";

function Stack() {
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
    <div class="stack-container">
      <div class="quote-wrapper">
        <div class="text">
          <p>
            <strong>Stack</strong>
            <br />
            Technologies tailored to the task. I use a variety of front-end &
            back-end technologies including CSS, React, Rails, MongoDB, PostgreSQL, and more...
          </p>
        </div>
      </div>
      <div class="icons-container">
        {techs.map((tech, idx, array) => {
          const angle = (idx / array.length) * 360;
          return <StackItem angle={angle} key={idx} name={tech} idx={idx} />;
        })}
      </div>
    </div>
  );
}

export default Stack;
