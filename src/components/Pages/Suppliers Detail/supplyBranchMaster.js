import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SupplyBranchMaster = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add Supplier Branch
          </Link>

          <Link to="/supplier/supplier-master">
            <button className="btn btn-dark ml-2">Supply Master</button>
          </Link>

          <h1 className="pt-4">Supplier Branch Master</h1>
          <small className="lead">
            Add new Suppliers Branch of Plantronics
          </small>
        </div>
        <br />
        <table className="table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Supplier</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Location</th>
              <th scope="col">Adress</th>
              <th scope="col">Contact Person 1</th>
              <th scope="col">Contact Person 2</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Westgonm</td>
              <td>Maharastra</td>
              <td>Mumbai</td>
              <td>Andheri East</td>
              <td>Plot No. 24, Near Mithai Shop</td>
              <td>Prashant</td>
              <td>-</td>
              <td>+9123546789</td>
              <td>Westgonm@gmail.com</td>
              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>

            <tr>
              <td>UNI Tech</td>
              <td>Jharkhand</td>
              <td>Ranchi</td>
              <td>Firayalal Chowk </td>
              <td>Flat No. 24, Near Punjab sweetsShop</td>
              <td>Kishor</td>
              <td>-</td>
              <td>+8127866789</td>
              <td>UniTech@gmail.com</td>
              <td>
                <i className="far fa-edit fa-md mr-2"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-2"></i>
              </td>
            </tr>
            <tr>
              <td>Ingram</td>
              <td>Delhi</td>
              <td>Delhi City</td>
              <td>Chandni Chowk </td>
              <td>Behind jama Masjid</td>
              <td>James</td>
              <td>-</td>
              <td>+8127866789</td>
              <td>-</td>
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
                        <option>Supplier</option>
                        <option>UniTech</option>
                        <option>Westgonm</option>
                        <option>Ingram</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>State</option>
                        <option>Jharkhand</option>
                        <option>Maharastra</option>
                        <option>Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Choose City</option>
                        <option>Kolkata</option>
                        <option>Ranchi</option>
                        <option>Banglore</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Location</option>
                        <option>Andheri</option>
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
                        placeholder="Contact Person 1"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Person 2"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
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

export default SupplyBranchMaster;
