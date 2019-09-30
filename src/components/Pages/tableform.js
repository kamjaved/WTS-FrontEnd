import React, { Fragment } from "react";

const TableForm = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="container bg-light">
            <br />
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">
                  State Master
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu1">
                  City Master
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu2">
                  City Location Master
                </a>
              </li>
            </ul>
          </div>

          <br />
          <form className="form-group bg-light pt-2 pb-4 pl-4 pr-4">
            <div className="form-inline row-md-12">
              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  <strong>Customer</strong>
                </label>
                <select
                  id="inputState"
                  className="form-control mb-2 mr-sm-2 col-md-6 "
                >
                  <option>Choose</option>
                  <option>Genpact</option>
                  <option>TCS</option>
                  <option>Amazon</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  <strong>State</strong>
                </label>
                <select
                  id="inputState"
                  className="form-control mb-2 mr-sm-2  col-md-6"
                >
                  <option>Jharkhand</option>
                  <option>Gujrat</option>
                  <option>Karnatka</option>
                  <option>Maharstra</option>
                </select>
              </div>
            </div>

            <div className="form-inline row-md-12">
              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  {" "}
                  <strong>City</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 col-md-6"
                  placeholder="Kolkata"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  {" "}
                  <strong>Location</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 col-md-6"
                  placeholder="Park Circus"
                />
              </div>
            </div>

            <div className="form-inline row-md-12">
              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  {" "}
                  <strong>Email</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 col-md-6"
                  placeholder="admin@gmail.com"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  {" "}
                  <strong>Phone</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 col-md-6"
                  placeholder="+9123435476"
                />
              </div>
            </div>

            <div className="form-inline row-md-12">
              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  {" "}
                  <strong>Contact Person</strong>
                </label>
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 col-md-6"
                  placeholder="Jhon.."
                />
              </div>

              <div className="form-group col-md-6">
                <label className="mb-2 mr-sm-2">
                  {" "}
                  <strong>Adress</strong>
                </label>
                <textarea
                  type="text"
                  className="form-control mb-2 mr-sm-2 col-md-6"
                  placeholder="Apartment, Street, Floor..."
                />
              </div>
            </div>

            <div className="form-group form-inline row-md-12">
              <div className="form-check col-md-2 mt-2">
                <input
                  className="form-check-input mr-2"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label">
                  <strong>Head Office</strong>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-danger col-md-4 mt-2 mr-2"
              >
                {" "}
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary col-md-4 mt-2 ml-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default TableForm;
