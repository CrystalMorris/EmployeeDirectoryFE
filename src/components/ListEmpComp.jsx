import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import AddEmpButton from "./AddEmpButton";
import SelectEmpButton from "./SelectEmpButton";

class ListEmpComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      console.table(this.state.employees)
    });
  }

  getUrl() {
    const url = window.location.href;
    console.log(url);
  }

  render() {
    return (
      <div >
        <h2 className="text-left  subheader">
          Employees List
        </h2>
 
        <div className="row">
          <table className="table table-striped tabled-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {this.state.employees.map(
                (employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td>
                      <SelectEmpButton emp={employee} />
                    </td>
                  </tr>
                )
                
              )}
            </tbody>
          </table>
        </div>
        <div className="footerSpacer">
          <p id="eol"><b>End of List</b></p>
         
        </div>
      </div>
      
    );
  }
}

export default ListEmpComp;
