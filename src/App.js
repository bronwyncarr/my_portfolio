import './App.css';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Stack from './components/Stack'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
