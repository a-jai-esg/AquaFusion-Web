import { useState, useEffect } from "react";
import "../stylesheets/App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/registration-stylesheets.css";
import AquaFusionLogo from "../assets/logo_image.png";
import AquaFusionLogoTitle from "../assets/logo_title.png";

export default function Registration() {
  useEffect(() => {
    document.title = "Register to AquaFusion";
  }, []);

  return (
    <>
      <div className="override-registration">
        <form className="registration-dialog row g-3">
          <div className="icon-area" align="center">
            <h1 className="subheader-registration h3 mb-3 font-weight-normal">ADMIN REGISTRATION</h1>
          </div>
          <div className="col-md-6">
            <label for="inputEmail" className="form-label">
              Email
            </label>
            <input type="email" className="registration-form-textbox form-control" id="inputEmail" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="registration-form-textbox form-control"
              id="inputPassword"
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail" className="form-label">
              Email
            </label>
            <input type="email" className="registration-form-textbox form-control" id="inputEmail" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="registration-form-textbox form-control"
              id="inputPassword"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-12">
            <button className="register-button btn btn-submit btn-xl">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
