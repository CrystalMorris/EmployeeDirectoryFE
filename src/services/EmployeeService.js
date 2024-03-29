import axios from "axios";

const EMP_API_BASE_URL = "https://sb-backend-emplist.herokuapp.com/api/v1/employees/";
const EMP_API_CREATE_URL = "https://sb-backend-emplist.herokuapp.com/api/v1/add-employee";
const EMP_API_UPDATE_URL = "https://sb-backend-emplist.herokuapp.com/api/v1/update-employee/";
const EMP_API_DELETE_URL = "https://sb-backend-emplist.herokuapp.com/api/v1/delete-employee/";
//const EMP_API_BYID_URL = `https://sb-backend-emplist.herokuapp.com/api/v1/employees/${id}`;
class EmployeeService {
  getEmployees() {
    // console.log(axios.get(EMP_API_BASE_URL));
    return axios.get(EMP_API_BASE_URL);
  }

  saveEmployee(fName, lName, eml, age) {
    console.log(fName + "," + lName + "," + eml);
    axios.post(EMP_API_CREATE_URL, {
      firstName: fName,
      lastName: lName,
      email: eml,
      age: age
    });
  }

  findEmployeesById(id) {
    console.log(`https://sb-backend-emplist.herokuapp.com/api/v1/employees/${id}`);
    return axios.get(`https://sb-backend-emplist.herokuapp.com/api/v1/employees/${id}`);
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
  updateEmployeeAge(id, age) {
    console.log(id + "," + age);
    axios.put(EMP_API_UPDATE_URL + id, { age: age });
  }

  deleteEmployee(id){
    axios.delete(EMP_API_DELETE_URL +id);
  }
}
export default new EmployeeService();
