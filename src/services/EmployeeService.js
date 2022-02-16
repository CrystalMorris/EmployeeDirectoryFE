import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMP_API_CREATE_URL = "http://localhost:8080/api/v1/add-employee";
const EMP_API_UPDATE_URL = "http://localhost:8080/api/v1/update-employee/";

class EmployeeService {
  getEmployees() {
    // console.log(axios.get(EMP_API_BASE_URL));
    return axios.get(EMP_API_BASE_URL);
  }

  saveEmployee(fName, lName, eml) {
    console.log(fName + "," + lName + "," + eml);
    axios.post(EMP_API_CREATE_URL, {
      firstName: fName,
      lastName: lName,
      email: eml,
    });
  }

  findEmployeesById(id) {
    return axios.get(EMP_API_BASE_URL + "/" + id);
  }
  updateEmployeeEmail(id, eml) {
    console.log(id + "," + eml);
    axios.put(EMP_API_UPDATE_URL + id, { email: eml });
  }
  updateEmployeeFirstName(id, fName) {
    console.log(id + "," + fName);
    axios.put(EMP_API_UPDATE_URL + id, { firstName: fName });
  }
  updateEmployeeLastName(id, lName) {
    console.log(id + "," + lName);
    axios.put(EMP_API_UPDATE_URL + id, { lastName: lName });
  }
}
export default new EmployeeService();
