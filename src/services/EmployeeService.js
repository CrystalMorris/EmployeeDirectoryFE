import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8080/api/v1/employees"
const EMP_API_CREATE_URL = "http://localhost:8080/api/v1/add-employee"
class EmployeeService{

    getEmployees(){
        return axios.get(EMP_API_BASE_URL);
    }

    saveEmployee(fName, lName, eml){
        console.log(fName + ',' + lName + ',' + eml);
        axios.post(EMP_API_CREATE_URL,{firstName: fName, lastName: lName, email: eml});
    }

}
export default new EmployeeService()