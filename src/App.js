import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Benefits from './components/Benefits'
import Scenarios from './components/Scenarios';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div>

    <div >
      <Navbar></Navbar>
    </div>

    <div>
      <Introduction></Introduction>
    </div>

    <div>
    <Benefits></Benefits>
    </div>

    

    <div>
      <Service></Service>
    </div>

    <div>
      <Scenarios></Scenarios>
    </div>

    <div>
      <Footer></Footer>
    </div>

    </div>
  );
}

export default App;
