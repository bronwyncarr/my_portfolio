import "./Nav.css";

function Nav() {
  return (
    <nav class="nav">
      <div class="nav-container">
        <h1 class="logo">Name</h1>
        <ul class="word-links">
          <li><a href="#" class="current">Home</a></li>
          <li><a href="#">Stack</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul class="icon-links">
          <li><a href="#" class="current"><i class="fas fa-home"></i></a></li>
          <li><a href="#"><i class="fas fa-tools"></i></a></li>
          <li><a href="#"><i class="fas fa-clipboard-list"></i></a></li>
          <li><a href="#"><i class="fas fa-phone"></i></a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;