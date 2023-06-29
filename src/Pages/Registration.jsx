import { useState, useEffect} from 'react'
import './App.css'

function App() {
  
  useEffect(() => {
    document.title = "Register to AquaFusion";
  }, []);

  return (
    <>
      <p>Hello, World.</p>    
    </>
  )
}

export default App