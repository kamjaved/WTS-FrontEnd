import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import StateMaster from "./LocationMaster/StateMaster";
const PageFinal = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="container bg-light mb-4">
            <br />
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <Link to="/table" className="nav-link active" href="#home">
                  State Master
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/table" className="nav-link" href="#menu1">
                  City Master
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/table" className="nav-link" href="#menu2">
                  City Location Master
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <StateMaster />
      </div>
    </Fragment>
  );
};

export default PageFinal;
