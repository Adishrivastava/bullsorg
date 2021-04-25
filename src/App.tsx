import './App.css';
import './styles/global.css'
import Homepage from './pages/homepage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
