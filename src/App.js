import { useState } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Fab from './components/Fab/Fab';
import Modal from './components/Modal/Modal';

function App() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <AppBar />
      <Fab handleClick={toggleModal} />
      <Modal active={show}  toggle={toggleModal} />
      <div className={`overlay ${show ? "show": ""}`} tabIndex="-1"></div>
    </div>
  );
}

export default App;
