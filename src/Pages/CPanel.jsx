import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CPanel() {
  
  useEffect(() => {
    document.title = "User CPanel";
  });

  return (
    <>
      <p>CPanel.</p>    
    </>
  )
}

export default CPanel