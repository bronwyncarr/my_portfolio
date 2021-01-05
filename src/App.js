import './App.css';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div style={{height: "800px", backgroundColor: "whitesmoke"}}>
        <h1>STACK GOES HERE</h1>
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
