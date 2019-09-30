import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add Product Detail
          </Link>

          <Link to="/product/product-type">
            <button className="btn btn-dark ml-2">Product Type </button>
          </Link>
          <Link to="/product/warranty-scheme">
            <button className="btn btn-dark ml-2">Warranty Scheme</button>
          </Link>

          <h1 className="pt-4">Product Details</h1>
          <small className="lead">Add new Product of Plantronics</small>
        </div>
        <br />
        <table className="table table-hover mt-4">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Part No</th>
              <th scope="col">Product</th>
              <th scope="col">Product Type</th>
              <th scope="col">Product Detail</th>
              <th scope="col">Warranty</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2609-01</td>
              <td>P10</td>
              <td>Headfone</td>
              <td>Corded Headset</td>
              <td>24</td>
              <td>
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>

            <tr>
              <td>2609-21</td>
              <td>WB10</td>
              <td>HeadSet</td>
              <td>Wireless Headset</td>
              <td>12</td>
              <td>
                <i className="far fa-edit fa-md mr-4"></i>
                <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
              </td>
            </tr>
            <tr>
              <td>2609-21</td>
              <td>PAP20</td>
              <td>Adapter</td>
              <td>Plug Audio Processor</td>
              <td>24</td>
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Part No."
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Product Type</option>
                        <option>Cable</option>
                        <option>Adapter</option>
                        <option>Headset</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Warranty</option>
                        <option>0</option>
                        <option>12</option>
                        <option>24</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
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

export default ProductDetails;
