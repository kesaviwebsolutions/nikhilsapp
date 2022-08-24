import './App.css';
import {useEffect,useState} from 'react'
import { checking } from "./Web3"


function App() {

  useEffect(()=>{
    const init =async()=>{
      checking();
    }
    init();
  },[])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
