import { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/login-page.css";
import AquaFusionLogo from "../Pictures/logo_image.png";
import AquaFusionLogoTitle from "../Pictures/logo_title.png";

function Login() {
  useEffect(() => {
    document.title = "Login to AquaFusion";
  }, []);

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState(''); 

  const formAttribs = [
    // email field
    {
      label: "Email Address",
      type: "email",
      id: "inputEmail",
      placeholder: "Enter Email",
    },

    // password field
    {
      label: "Password",
      type: "password",
      id: "inputPassword",
      placeholder: "Enter Password",
    },
  ];

  const imageResourcesAttribs = [
    // login logo
    {
      class: "mb-4",
      image: AquaFusionLogo ,
      width: 135,
      height: 206,
    },

    // login logo title
    {
      class: "mb-3",
      image: AquaFusionLogoTitle,
      width: 431,
      height: 74,
    },
  ];

  return (
    <>
      <div className="root-color-override">
        <form className="form-signin login-dialog">
          {imageResourcesAttribs.map((data) => {
            return (
              <div className="icon-area" align="center">
                <img
                  className={data.class}
                  src={data.image}
                  alt=""
                  width={data.width}
                  height={data.height}
                />
              </div>
            );
          })}

          <h1 className="subheader-login mb-3 font-weight-normal">WELCOME</h1>

          {formAttribs.map((data) => {
            return (
              <div className="mb-3 form-inline">
                <input
                  type={data.type}
                  className="login-form-textbox form-control"
                  id={data.id}
                  onChange={(e) => {
                    if(data.type === "email"){
                      setEmail(e.target.value);
                    }
                    else{
                      setPassword(e.target.value);
                    }
                  }}
                  aria-describedby="emailHelp"
                  placeholder={data.placeholder}
                />
              </div>
            );
          })}

          <div className="align-to-right col-sm">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <small>
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </small>
          </div>

          <button className="btn-submit btn-primary" onClick={(e)=> {
            console.log(`Email: ${email} Password: ${password}`);
          }}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
