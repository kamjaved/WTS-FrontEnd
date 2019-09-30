import React, { Fragment } from "react";

const Table = () => {
  return (
    <Fragment>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
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
            <th scope="row">1</th>
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
            <th scope="row">2</th>
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
            <th scope="row">3</th>
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
    </Fragment>
  );
};

export default Table;
