import "./Nav.css";

function Nav() {
  return (
    <nav class="nav">
      <div class="nav-container">
        <h1 class="logo"><a href="/index.html">My Website</a></h1>
        <ul>
          <li><a href="#" class="current">Home</a></li>
          <li><a href="#">Stack</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
