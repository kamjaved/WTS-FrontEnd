import React, { Fragment } from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>
            <Link to="/">
              <input type="submit" name="" value="Register" />
            </Link>
            <br />
          </div>

          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Employee
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Please Login </h3>

                <div className="row-xs-9 register-form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password*"
                    />
                  </div>

                  <input type="submit" className="btnRegister" value="Login" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
