import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function DeleteEmpButton(emp) {
  let navigate = useNavigate();

  return (
    <button
      className="btn btn-danger centered "
      onClick={() => {
      if(window.confirm(
            "YOU ARE ABOUT TO DELETE THE FOLLOWING EMPLOYEE :\r\n" +
              emp.emp.firstName +
              " " +
              emp.emp.lastName +
              ", " +     
              emp.emp.email+"\r\n THIS CANNOT BE UNDONE!\r\n PRESS OK TO PROCEED OR CANCEL TO RETURN TO EMPLOYEE LIST"

              
          ) == true){
            EmployeeService.deleteEmployee(emp.emp.id);
            alert("Employee deleted!");
            navigate(`/employees` );

          } else{
            navigate(`/employees`)
          };

          

          
      }}
    >
      Delete 
    </button>
  );
}

export default DeleteEmpButton;
