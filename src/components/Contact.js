import "./Contact.css";

function Contact({id}) {
  // Contact card includes heading, form with 2x inputs and icons container for socials. 
  return (
    <section className="contact"  id={id}>
      <h1>Let's Chat</h1>
      <form action="https://formspree.io/f/xnqobwpy" method="POST">
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            name="_replyto"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            type="password"
            id="message"
            rows="7"
            name="message"
          ></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div className="icons">
        <a href="https://github.com/bronwyncarr">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/bronwyncarr">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/home">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
