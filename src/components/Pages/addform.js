import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Addform = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="form-title">
            <Link to="/table" className="btn btn-primary">
              <i className="fa fa-arrow-left"> </i> Go Back
            </Link>
            <h1 className="pt-4">Add Customer</h1>
            <small className="lead">
              Welcome a new Customer to your company...
            </small>
          </div>
          <br />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label> Address </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label>Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label>State</label>
                <select id="inputState" className="form-control">
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label>Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group"></div>
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Addform;
