import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
     <Navbar title="Text Utils" aboutText="About"/>
     <TextForm heading="Enter the Text"/>
    </>
  );
}

export default App;
