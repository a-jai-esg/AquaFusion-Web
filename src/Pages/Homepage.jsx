import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Homepage() {
  
  useEffect(() => {
    document.title = "AquaFusion: Aquaponics IoT Monitoring System";
  });

  return (
    <>
      <p>Homepage</p>    
    </>
  )
}

export default Homepage