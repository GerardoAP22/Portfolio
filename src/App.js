import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar id='navbar'/>
      <Home id='home'/>
      <About id='about'/>
      <Skills id='skills'/>
      <Projects id='projects'/>
      <Contact id='contact'/>
      <Footer id='footer'/>
    </div>
  );
}

export default App;
