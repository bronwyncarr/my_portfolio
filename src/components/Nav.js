import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="logo">Name</h1>
        <ul className="word-links">
          <li>
            <a href="#" className="current">
              Home
            </a>
          </li>
          <li>
            <a href="#">Stack</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="icon-links">
          <li>
            <a href="#" className="current">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-tools"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-clipboard-list"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
