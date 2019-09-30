import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserCreation = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add User Detail
          </Link>

          <Link to="/user/industry-type">
            <button className="btn btn-dark ml-2">Industry Type </button>
          </Link>
          <Link to="/user/user-type-master">
            <button className="btn btn-dark ml-2">User Type Master</button>
          </Link>

          <h1 className="pt-4">User Creations</h1>
          <small className="lead">Add new User of Industry</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4 col-sm-2">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Plantronics</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Administrator</td>
                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>

              <tr>
                <td>TAC</td>

                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>
              <tr>
                <td>FE</td>
                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
          {/*-- Table 2 Starts  -*/}
          <table className="table table-hover mt-4 ml-2 col-sm-2">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Supplier</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Administrator</td>
                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>

              <tr>
                <td>TAC</td>

                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>
              <tr>
                <td>FE</td>
                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>
            </tbody>
          </table>

          {/*-- Table 3 Starts  -*/}
          <table className="table table-hover mt-4 ml-2 col-sm-2">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Customer</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manager</td>
                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>

              <tr>
                <td>Administrator</td>

                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>
            </tbody>
          </table>

          {/*-- Table 4 Starts  -*/}
          <table className="table table-hover mt-4 ml-2 col-sm-2">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manager</td>
                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>

              <tr>
                <td>Administrator</td>

                <td>
                  <i className="far fa-edit fa-md mr-2"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
                  Add Branch
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
                      <select className="form-control">
                        <option>Industry Type</option>
                        <option>Plantronics</option>
                        <option>Customer</option>
                        <option>Supplier</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select className="form-control">
                        <option>Branch</option>
                        <option>Cable</option>
                        <option>Adapter</option>
                        <option>Headset</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-6">
                      <select className="form-control">
                        <option>User Type</option>
                        <option>Manager</option>
                        <option>Admin</option>
                        <option>FE</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User ID"
                      />
                      <br />

                      <div className="form-row ml-4 mb-4">
                        <div className="form-check col-sm-6">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label className="form-check-label">
                            <strong>Check avilability</strong>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
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

export default UserCreation;
