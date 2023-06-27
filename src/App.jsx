import { useState, useEffect} from 'react'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.css'
//import './App.css'

export default function App() {

  // we'll integrate axios here to get data from firebase
  useEffect(() => {
    document.title = "AquaFusion: Aquaponics IoT Monitoring System";
  });

  return (
    <>
      <Login/> 
    </>
  )
}
