import './App.css';
import Navbar from './components/Navbar';
import Institutes from './components/Institutes';
import Mentors from './components/Mentors';
import Advisors from './components/Advisors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Institutes/>
      <Mentors/>
      <Advisors/>
      <Footer/>
    </div>
  );
}

export default App;
