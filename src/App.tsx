import './App.css';
import './styles/global.css'
import Homepage from './pages/homepage';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  Aos.init();

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
