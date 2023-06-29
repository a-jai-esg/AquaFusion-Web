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
      <form className="registration-dialog row g-3">
        <div className="icon-area" align="center">
          <h1 className="h3 mb-3 font-weight-normal">Account Registration</h1>
        </div>
        <div className="col-md-6">
          <label for="inputEmail" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <label for="inputName" className="form-label">
            Complete Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Juana Dela Cruz"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            House/Mailing Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputBarangay" className="form-label">
            Barangay
          </label>
          <select id="inputBarangay" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              I agree to the terms and conditions.
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-submit btn-primary">
            Register!
          </button>
        </div>
      </form>
    </>
  );
}
