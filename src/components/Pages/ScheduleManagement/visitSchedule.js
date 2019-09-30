import React, { Fragment } from "react";

const VisitSchedule = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-2">
        <div className="form-title">
          <h1 className="pt-4">Visit Schedule</h1>
          <small className="lead">Set Schedule for Complaint</small>
        </div>
        <br />
        <div className="modal-body bg-light">
          <form>
            <div className="form-row">
              <div className="form-group col-sm-4">
                <input
                  type="datetime-local"
                  className="form-control"
                  placeholder="Date&Time"
                />
                <small>
                  <span className="text-danger">*</span>Date&Time
                </small>
              </div>

              <div className="form-group col-sm-4">
                <select id="inputState" className="form-control">
                  <option>Customer</option>
                  <option>Genpact</option>
                  <option>TCS</option>
                  <option>UNItech</option>
                </select>
              </div>
              <div className="form-group col-sm-4">
                <select id="inputState" className="form-control">
                  <option>State</option>
                  <option>Jharkhand</option>
                  <option>Maharastra</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-4">
                <select id="inputState" className="form-control">
                  <option>City</option>
                  <option>Delhi</option>
                  <option>Ranchi</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="form-group col-sm-4">
                <select id="inputState" className="form-control">
                  <option>Location</option>
                  <option>Andheri</option>
                  <option>Jamia West</option>
                  <option>FirayaLal</option>
                </select>
              </div>
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone No"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contact person"
                />
              </div>
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pincode"
                />
              </div>
              <div className="form-group col-sm-4">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Adress"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="modal-body bg-light">
          <form>
            <div className="form-row">
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone No."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-4">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Best Visit Date"
                />
                <span className="text-danger">*</span>{" "}
                <small>Best visit date</small>
              </div>
              <div className="form-group col-sm-4">
                <select id="inputState" className="form-control">
                  <option>Field Engineer</option>
                  <option>Rakesh</option>
                  <option>Arun</option>
                  <option>Shaquib</option>
                </select>
              </div>
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group col-sm-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Best Visit Time"
                />
              </div>
              <div className="form-group col-sm-4">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Complaint Details"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default VisitSchedule;
