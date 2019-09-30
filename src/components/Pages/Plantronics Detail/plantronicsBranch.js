import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PlantronicsBranch = () => {
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

          <Link to="/plantronics/employee-detail">
            <button className="btn btn-dark ml-2">
              Plantronics Employee Branch
            </button>
          </Link>

          <h1 className="pt-4">Plantronics Branch</h1>
          <small className="lead">Add new Branch of Plantronics</small>
        </div>
        <br />
        <table className="table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Location</th>
              <th scope="col">Adress</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maharastra</td>
              <td>Mumbai</td>
              <td>Andheri East</td>
              <td>Plot No. 24, Near Mithai Shop</td>
              <td>+9123546789</td>

              <td>
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>

            <tr>
              <td>Jharkhand</td>
              <td>Ranchi</td>
              <td>Firayalal Chowk </td>
              <td>Flat No. 24, Near Punjab sweetsShop</td>
              <td>+8127866789</td>
              <td>
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>
            <tr>
              <td>Delhi</td>
              <td>Delhi City</td>
              <td>Chandni Chowk </td>
              <td>Behind jama Masjid</td>
              <td>+7123567889</td>

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
                      <select id="inputState" className="form-control">
                        <option>Location</option>
                        <option>Andheri</option>
                        <option>Ranchi</option>
                        <option>Banglore</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Adress"
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

export default PlantronicsBranch;
