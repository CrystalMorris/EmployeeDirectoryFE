import axios from "axios";
//import httpClient from '../http-common';
const EMP_API_BASE_URL = "http://localhost:8080/api/v1/employees"
const EMP_API_CREATE_URL = "http://localhost:8080/api/v1/add-employee"
const EMP_API_UPDATE_URL = "http://localhost:8080/api/v1/update-employee/"
// const getAll =() =>{
//     return httpClient.get('/employees');

// }
//  export default {getAll};

class EmployeeService{

    getEmployees(){
        console.log(axios.get(EMP_API_BASE_URL));
        return axios.get(EMP_API_BASE_URL);
    }

    saveEmployee(fName, lName, eml){
        console.log(fName + ',' + lName + ',' + eml);
        axios.post(EMP_API_CREATE_URL,{firstName: fName, lastName: lName, email: eml});
    }

    findEmployeesById(id){
        console.log(axios.get(EMP_API_BASE_URL+"/" + id).data);
        //.then(response => response.data);
        //console.log(returnedData.id);
          return  axios.get(EMP_API_BASE_URL+"/" + id);
          
     }
    updateEmployee(id, fName, lName, eml){
        console.log(fName + ',' + lName + ',' + eml);
        axios.put(EMP_API_UPDATE_URL + id,{firstName: fName, lastName: lName, email: eml})
    }

}
export default new EmployeeService()