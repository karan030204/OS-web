// import AboutPage from './AbouPage';
import './App.css';
import PetersonAlgorithm from './Components/PetersonAlgorithm';
// import PetersonAlgorithm from './Components/PetersonAlgorithm';
import PriorityTable from './Components/FCFSScheduling';
import Try from './Components/Try';
import FCFSScheduling from './Components/FCFSScheduling';
import PriorityScheduling from './Components/PriorityScheduling';
import Footer from './Components/Footer';
import NavbarOfHome from './Components/NavbarOfHome';

function App() {
  return (
    <div className="App">
      {/* <FCFSScheduling/> */}
      {/* <PriorityScheduling/> */}
      {/* <Try/> */}
      <NavbarOfHome/>
      <PetersonAlgorithm/>
      <Footer/>
    
    </div>
  );
}

export default App;
