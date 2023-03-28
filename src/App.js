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
      <Routes>
        <Route path="/" element={<PetersonAlgorithm />} />
        <Route path="/priority" element={<PriorityScheduling />} />
        <Route path="/peterson" element={<Try />} />
        <Route path="/fcfs" element={<FCFSScheduling/>} />
        <Route path="/opr" element={<OptimalPageReplacement/>} />

      </Routes>
    
    </div>
  );
}

export default App;
