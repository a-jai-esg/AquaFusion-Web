import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Login() {
  
  useEffect(() => {
    document.title = "Login to AquaFusion";
  });

  return (
    <>
      <p>Hello, World.</p>    
    </>
  )
}

export default Login