import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

let toGreeting = prompt("Cual es tu nombre?");

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={toGreeting} />
    </div>
  );
}

export default App;
