import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import './App.css';


function App() {
  return (

    <div className="App">

      <Navbar />
      <Home />
      <About />
      <Skills />


    </div>
    
  );
}

export default App;
