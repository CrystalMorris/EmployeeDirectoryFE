import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import state from "react";
import { render } from "@testing-library/react";

const UpdateEmpComp = (emp) => {
  const [enteredId, setId] = useState("");
  const [enteredFName, setFName] = useState("");
  const [enteredLName, setLName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredAge, setAge] = useState("");
  const originalFName = emp.emp.firstName;
  const originalLName = emp.emp.lastName;
  const originalEmail = emp.emp.email;
  const originalAge = emp.emp.age;

  useEffect(() => {
    setId(emp.emp.id);
  });

  let navigate = useNavigate();

  const changeFirstNameHandler = (e) => {
    setFName(e.target.value);
    console.log(enteredFName);
  };

  const changeLastNameHandler = (e) => {
    setLName(e.target.value);
    console.log(enteredLName);
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };
  //I have separate method for updating each field so fields aren't accidently deleted by being left blank
  const submitHandler = (e) => {
    const url = window.location.href;
    const id = url.slice(32);
    console.log(emp.emp.id);
    e.preventDefault();
    if (enteredFName !== "") {
      EmployeeService.updateEmployeeFirstName(id, enteredFName);
    }

    if (enteredLName !== "") {
      EmployeeService.updateEmployeeLastName(id, enteredLName);
    }

    if (enteredEmail !== "") {
      EmployeeService.updateEmployeeEmail(id, enteredEmail);
    }
    if (enteredAge !== "") {
      EmployeeService.updateEmployeeAge(id, enteredAge);
    }
    console.log()
    alert(
      "Employee Has been Updated :" +
        emp.emp.firstName +
        ", " +
        emp.emp.lastName +
        ", " +
        emp.emp.email +
        ", " + 
        emp.emp.age
    );

    return navigate("/employees");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-8 offset-md-2 ">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body ">
              <form>
                <div className="form-group ">
                  <label>First Name</label>
                  <input
                    placeholder={emp.emp.firstName}
                    name="First Name"
                    type="text"
                    className="form-control"
                    value={enteredFName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    placeholder={emp.emp.lastName}
                    name="Last Name"
                    type="text"
                    className="form-control"
                    value={enteredLName}
                    onChange={changeLastNameHandler}
                  />
                  
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    placeholder={emp.emp.email}
                    name="email"
                    type="text"
                    className="form-control"
                    value={enteredEmail}
                    onChange={changeEmailHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    placeholder={emp.emp.age}
                    name="email"
                    type="text"
                    className="form-control"
                    value={enteredAge}
                    onChange={changeAgeHandler}
                  />
                </div>

                <div className="row justify-content-between">
                  <button
                    className="btn btn-success col-3 align-self-left  m-3 "
                    onClick={submitHandler}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-danger col-3 align-self-right  m-3"
                    onClick={() => {
                      navigate("/employees");
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmpComp;
