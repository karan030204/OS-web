// import AboutPage from './AbouPage';
import './App.css';
import PetersonAlgorithm from './Components/PetersonAlgorithm';
import PriorityTable from './Components/FCFSScheduling';
import Try from './Components/Try';
import FCFSScheduling from './Components/FCFSScheduling';
import PriorityScheduling from './Components/PriorityScheduling';
import Footer from './Components/Footer';
import NavbarOfHome from './Components/NavbarOfHome';
import { Routes,Route } from 'react-router-dom';
import OptimalPageReplacement from './Components/OptimalPageReplacement';
import Home from './Components/Home/Home';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavbar from './Components/NewNavbar';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Particle from './Components/Particle';

function App() {
  return (
    <div className="App">
      
      {/* <FCFSScheduling/> */}
      {/* <PriorityScheduling/> */}
      {/* <Try/> */}
      {/* <NavbarOfHome/>
      <PetersonAlgorithm/>
      <Footer/> */}
      {/* <PetersonAlgorithm/> */}
      {/* <Try/> */}
      {/* <Chart/> */}
      {/* <NavbarOfHome/> */}
      <NewNavbar/>
      <Particle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/priority" element={<PriorityScheduling />} />
        <Route path="/peterson" element={<Try />} />
        <Route path="/fcfs" element={<FCFSScheduling/>} />
        <Route path="/opr" element={<OptimalPageReplacement/>} />
        {/* <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumeNew />} /> */}
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
 </Routes>
    
    </div>
  );
}

export default App;
