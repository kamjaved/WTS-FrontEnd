import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CityLocationMaster = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add Location
          </Link>

          <Link to="/location/statemaster">
            <button className="btn btn-dark ml-2">State Master</button>
          </Link>
          <Link to="/location/citymaster">
            <button className="btn btn-dark ml-2">City Master</button>
          </Link>

          <h1 className="pt-4">Location Master</h1>
          <small className="lead">Add Location into Database</small>
        </div>
        <br />
        <table className="table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Location</th>
              <th scope="col">Adress</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Genpact</td>
              <td>Maharastra</td>
              <td>Mumbai</td>
              <td>Andheri</td>
              <td>Plot-no-94-95 udyog vihar</td>
              <td>
                {" "}
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>
            <tr>
              <td>TCS</td>
              <td>Uttar Pardesh</td>
              <td>Gorakhpur</td>
              <td>Gorakhpur</td>
              <td>House-no-94-95 Anand Vihar</td>
              <td>
                {" "}
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>
            <tr>
              <td>Amazon</td>
              <td>Delhi</td>
              <td>Delhi City</td>
              <td>Jamia Nagar</td>
              <td>Flat-no-23-25 Anand Vihar Terminal</td>
              <td>
                {" "}
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
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
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Location
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
                        <option>Choose State</option>
                        <option>Gujrat</option>
                        <option>Jharkhand</option>
                        <option>Karnatka</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Choose City</option>
                        <option>Kolkata</option>
                        <option>Ranchi</option>
                        <option>Banglore</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location Name"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pin Code"
                      />
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

export default CityLocationMaster;
