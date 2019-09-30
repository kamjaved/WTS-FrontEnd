import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const EmployeeDetail = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add Branch
          </Link>
          <Link to="/plantronics/branch">
            <button className="btn btn-dark ml-2">Plantronics Branch</button>
          </Link>

          <h1 className="pt-4">Employee Details</h1>
          <small className="lead">Add Employee of Plantronics Branch</small>
        </div>
        <br />
        <table className="table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Department</th>
              <th scope="col">Phone</th>
              <th scope="col">Desk No.</th>
              <th scope="col">Email</th>
              <th scope="col">Branch Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amit</td>
              <td>Kumar</td>
              <td>FE</td>
              <td>Customer Care</td>
              <td>+9123546789</td>
              <td>2229694</td>
              <td>amitkkumar@gmail.com</td>
              <td>PB002</td>
              <td>
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>

            <tr>
              <td>Bobby</td>
              <td>Jha</td>
              <td>Operation </td>
              <td>Head</td>
              <td>+919876789</td>
              <td>2225994</td>
              <td>jbobbyr@gmail.com</td>
              <td>PB005</td>
              <td>
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>
            <tr>
              <td>Amrender</td>
              <td>Lamba</td>
              <td>TAC</td>
              <td>Technical</td>
              <td>+916566789</td>
              <td>+6661994</td>
              <td>Amrender@gmail.com</td>
              <td>PB007</td>
              <td>
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First-Name"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last-Name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Designation</option>
                        <option>FE</option>
                        <option>Operation</option>
                        <option>Admin</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Department"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone No"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Desk No"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Branch Id</option>
                        <option>PB001</option>
                        <option>PB002</option>
                        <option>PB003</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
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

export default EmployeeDetail;
