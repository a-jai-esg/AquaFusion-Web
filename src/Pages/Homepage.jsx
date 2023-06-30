import { useState, useEffect } from "react";

// import stylesheets
import "../stylesheets/App.css";
import "../stylesheets/main.css";
import Navbar from "../Components/Navbar";

export default function Homepage({ isLoggedIn, username, profilePicture }) {
  useEffect(() => {
    document.title = "AquaFusion: Aquaponics IoT Monitoring System";
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
