import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form action="https://formspree.io/f/xnqobwpy" method="POST">
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            name="_replyto"
          ></input>
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea
            type="password"
            className="form-control"
            id="message"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary btn-dark">
          Submit
        </button>
      </form>
      <div className="icons">
        <a href="https://github.com/bronwyncarr">
          <i className="fab fa-github fa-3x m-2 text-dark"></i>
        </a>
        <a href="www.linkedin.com/in/bronwyncarr">
          <i className="fab fa-linkedin fa-3x m-2 text-dark"></i>
        </a>
        <a href="https://twitter.com/home">
          <i className="fab fa-twitter fa-3x m-2 text-dark"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
