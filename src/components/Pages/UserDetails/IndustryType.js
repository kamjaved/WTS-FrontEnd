import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const IndustryType = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add Industry Type
          </Link>

          <Link to="/user/user-creation">
            <button className="btn btn-dark ml-2">User Creation </button>
          </Link>
          <Link to="/user/user-type-master">
            <button className="btn btn-dark ml-2">User Type Master</button>
          </Link>

          <h1 className="pt-4">Industry Types</h1>
          <small className="lead">Add new Plantronics Products Types</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4 col-sm-6">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Industry Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plantronics</td>
                <td>
                  <i className="far fa-edit fa-md mr-4"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
                </td>
              </tr>

              <tr>
                <td>Supplier</td>
                <td>
                  <i className="far fa-edit fa-md mr-4"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
                </td>
              </tr>
              <tr>
                <td>Customer</td>
                <td>
                  <i className="far fa-edit fa-md mr-4"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
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
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Industry Types"
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

export default IndustryType;
