import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


function App() {
  return (

    <div className="App">

      <Navbar />
      <Home />
      <About />


    </div>
    
  );
}

export default App;
