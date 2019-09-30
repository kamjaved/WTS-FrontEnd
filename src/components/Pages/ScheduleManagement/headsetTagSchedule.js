import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const TagSchedule = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add New Schedule
          </Link>

          <Link to="/schedule/visit">
            <button className="btn btn-dark ml-2">Visit Schedule</button>
          </Link>

          <h1 className="pt-4">Headset Tag Schedule</h1>
          <small className="lead">Add Tag Schedule of Headset</small>
        </div>
        <br />
        <table className="table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Logged By</th>
              <th scope="col">Field Enginner</th>
              <th scope="col">Schedule Date</th>
              <th scope="col">Time</th>
              <th scope="col">Activity Type</th>
              <th scope="col">Customer</th>
              <th scope="col">Customer Adress</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Administrator</td>
              <td> Sanjeev Kumar</td>
              <td>30/08/2019</td>
              <td>03:30 AM</td>
              <td>tagging</td>
              <td>Genpact</td>
              <td>Plot 24-25 Andheri East, Mumbai </td>
              <td>Awaiting</td>

              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>

            <tr>
              <td>Sanjeev</td>
              <td> Atul </td>
              <td>10/09/2019</td>
              <td>05:30 PM</td>
              <td>O</td>
              <td>TCS</td>
              <td>Flat 24-25 Bhindi Bazaar East, Mumbai </td>
              <td>Fixed</td>

              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>
            <tr>
              <td>Administrator</td>
              <td> Sanjeev</td>
              <td>11/08/2019</td>
              <td>08:30 AM</td>
              <td>tagging</td>
              <td>UniTech</td>
              <td>Jamia Nagar, Falt No-304, Delhi </td>
              <td>Awaiting</td>
              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>
          </tbody>
        </table>
        {/*-- Modal Starts  -*/}

        <div
          className="modal fade"
          id="exampleModalCenter"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Employee
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Customer</option>
                        <option>Genpact</option>
                        <option>TCS</option>
                        <option>UniTech</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Activity</option>
                        <option>Operation</option>
                        <option>Maintenence</option>
                        <option>Tagging</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>State</option>
                        <option>Maharastra</option>
                        <option>Jharkhand</option>
                        <option>Delhi</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Field Enginner</option>
                        <option>Arun</option>
                        <option>Shaquib</option>
                        <option>Sanjeev</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>City</option>
                        <option>Mumbai</option>
                        <option>Ranchi</option>
                        <option>Delhi</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Location</option>
                        <option>Andheri</option>
                        <option>Jamia Nagar</option>
                        <option>Firayalal</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Email"
                      />
                      <small>
                        <span className="text-danger">*</span>Schedule Date
                      </small>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Email"
                      />
                      <small>
                        <span className="text-danger">*</span>Schedule Time
                      </small>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Add
                  </button>
                </form>
              </div>
              {/*-- Modal Body Ends  -*/}
            </div>
          </div>
        </div>
        {/*-- Modal Ends  -*/}
      </div>
    </Fragment>
  );
};

export default TagSchedule;
