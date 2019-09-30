import React, { Fragment } from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <Fragment>
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from earning your own money!</p>

            <Link to="./login">
              <input type="submit" name="" value="Login" />
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
                <h3 className="register-heading">Apply as a Employee</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                      />
                    </div>
                    <div className="form-group">
                      <div className="maxl">
                        <label className="radio inline">
                          <input type="radio" name="gender" value="male" />
                          <span> Male </span>
                        </label>
                        <label className="radio inline">
                          <input type="radio" name="gender" value="female" />
                          <span>Female </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtEmpPhone"
                        className="form-control"
                        placeholder="Your Phone *"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Answer *"
                      />
                    </div>
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Register"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h3 className="register-heading">Apply as a Hirer</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="`Answer *"
                      />
                    </div>
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Register"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
