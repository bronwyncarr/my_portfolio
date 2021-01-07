import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav({id}) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id={id}>
      <div className="nav-container">
        <h1 className="logo">Name</h1>
        <ul className="word-links">
          <li>
            <a href="#" onClick={scrollToTop}>Home</a>
          </li>
          <li>
          <Link
                activeClass="active"
                to="stack"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
            Stack
            </Link>
          </li>
          <li> 
             <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
            Projects
            </Link>
          </li>
          <li>
          <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
         Contact
         </Link>
          </li>
        </ul>
        <ul className="icon-links">
          <li>
          <a href="#" onClick={scrollToTop}><i className="fas fa-home"></i></a>
              
            
          </li>
          <li>
          <Link
                activeClass="active"
                to="stack"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <i className="fas fa-tools"></i>
              </Link>
          </li>
          <li>
          <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <i className="fas fa-clipboard-list"></i>
              </Link>
          </li>
          <li>
          <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              <i className="fas fa-phone"></i>
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
