import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/Auth/register";
import Login from "./components/Auth/login";
import Sidebar from "./components/UI/sidebar";
import StateMaster from "./components/Pages/LocationMaster/StateMaster";
import CityMaster from "./components/Pages/LocationMaster/CityMaster";
import CityLocationMaster from "./components/Pages/LocationMaster/CityLocationMaster";
import Table from "./components/Pages/table";
import TableForm from "./components/Pages/tableform";
import PlantronicsBranch from "./components/Pages/Plantronics Detail/plantronicsBranch";
import EmployeeDetail from "./components/Pages/Plantronics Detail/employeeDetail";
import SupplyMaster from "./components/Pages/Suppliers Detail/supplyMaster";
import SupplyBranchMaster from "./components/Pages/Suppliers Detail/supplyBranchMaster";
import CategoryType from "./components/Pages/Customer Details/categoryTypes";
import CustomerMaster from "./components/Pages/Customer Details/customerMaster";
import CustomerBranch from "./components/Pages/Customer Details/customerBranch";
import WarrantyScheme from "./components/Pages/ProductDetail/warrantyScheme";
import ProductType from "./components/Pages/ProductDetail/productType";
import ProductDetails from "./components/Pages/ProductDetail/productDetail";
import IndustryType from "./components/Pages/UserDetails/IndustryType";
import UserTypeMaster from "./components/Pages/UserDetails/userTypeMaster";
import UserCreation from "./components/Pages/UserDetails/UserCreation";
import VisitSchedule from "./components/Pages/ScheduleManagement/visitSchedule";
import TagSchedule from "./components/Pages/ScheduleManagement/headsetTagSchedule";

function App() {
  return (
    <Router>
      <Fragment>
        <Sidebar>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/location/statemaster" component={StateMaster} />
            <Route exact path="/location/citymaster" component={CityMaster} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/tableform" component={TableForm} />

            <Route
              exact
              path="/location/city-location-master"
              component={CityLocationMaster}
            />

            <Route
              exact
              path="/plantronics/branch"
              component={PlantronicsBranch}
            />
            <Route
              exact
              path="/plantronics/employee-detail"
              component={EmployeeDetail}
            />

            <Route
              exact
              path="/supplier/supplier-master"
              component={SupplyMaster}
            />
            <Route
              exact
              path="/supplier/supplier-branch-master"
              component={SupplyBranchMaster}
            />
            <Route exact path="/customer/category" component={CategoryType} />
            <Route
              exact
              path="/customer/customer-master"
              component={CustomerMaster}
            />
            <Route
              exact
              path="/customer/customer-detail"
              component={CustomerBranch}
            />
            <Route
              exact
              path="/product/warranty-scheme"
              component={WarrantyScheme}
            />
            <Route exact path="/product/product-type" component={ProductType} />
            <Route
              exact
              path="/product/product-detail"
              component={ProductDetails}
            />
            <Route exact path="/user/industry-type" component={IndustryType} />
            <Route
              exact
              path="/user/user-type-master"
              component={UserTypeMaster}
            />
            <Route exact path="/user/user-creation" component={UserCreation} />

            <Route exact path="/schedule/visit" component={VisitSchedule} />
            <Route exact path="/schedule/tag" component={TagSchedule} />
          </Switch>
        </Sidebar>
      </Fragment>
    </Router>
  );
}

export default App;
