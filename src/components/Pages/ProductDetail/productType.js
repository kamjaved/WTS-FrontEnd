import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProductType = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i className="fa fa-plus mr-2"> </i>Add Product Type
          </Link>

          <Link to="/product/warranty-scheme">
            <button className="btn btn-dark ml-2">Warranty Scheme</button>
          </Link>
          <Link to="/product/product-detail">
            <button className="btn btn-dark ml-2">Product Detail</button>
          </Link>

          <h1 className="pt-4">Product Types</h1>
          <small className="lead">Add new Plantronics Products Types</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4 col-sm-6">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adapter</td>
                <td>
                  <i className="far fa-edit fa-md mr-4"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
                </td>
              </tr>

              <tr>
                <td>Cable</td>
                <td>
                  <i className="far fa-edit fa-md mr-4"></i>
                  <i className="far fa-trash-alt text-danger fa-md ml-4"></i>
                </td>
              </tr>
              <tr>
                <td>Cord</td>
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
                        placeholder="Product Types"
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

export default ProductType;
