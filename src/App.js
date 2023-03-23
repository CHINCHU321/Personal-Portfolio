import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Education from './components/Education/Education';
import Porfolio from './components/Portfolio/Porfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Education/>
      <Porfolio/>
      <Contact/>
    <Footer/>

    </div>

  );
  
}

export default App;
