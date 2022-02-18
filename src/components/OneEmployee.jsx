import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import UpdateEmpComp from "./UpdateEmpComp";
import DeleteEmpButton from "./DeleteEmpButton";



class OneEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const id = url.slice(32);

    EmployeeService.findEmployeesById(id).then((res) => {
      this.setState(res.data);
    });
  }

  render() {
       return (
      <div>
        <h2 className="text-center">Employee</h2>

        <div className="row">
          <table className="table table-striped tabled-bordered col-md-10">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.id}</td>
                <td>{this.state.firstName}</td>
                <td>{this.state.lastName}</td>
                <td>{this.state.email}</td>
                <td><DeleteEmpButton emp={this.state} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <UpdateEmpComp emp={this.state} />
          
        </div>
      </div>
    );
  }
}

export default OneEmployee;