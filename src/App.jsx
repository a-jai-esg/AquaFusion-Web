import { useState, useEffect} from 'react'
import Homepage from './Pages/Homepage'
//import './App.css'

function App() {

  // we'll integrate axios here to get data from firebase
  useEffect(() => {
    document.title = "AquaFusion: Aquaponics IoT Monitoring System";
  });

  return (
    <>
      <Homepage isLoggedIn={true} username={"Jennie Kim"} profilePicture={"https://cdns-images.dzcdn.net/images/artist/d246561939a0b8000f88d7d59df32f54/500x500.jpg"}/>
    </>
  )
}

export default App
