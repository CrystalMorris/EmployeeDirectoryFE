import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function DeleteEmpButton(emp) {
  let navigate = useNavigate();

  return (
    <button
      className="btn btn-danger centered "
      onClick={() => {
        alert(
            "YOU ARE ABOUT TO DELETE THE FOLLOWING EMPLOYEE :" +
              emp.emp.firstName +
              ", " +
              emp.emp.lastName +
              ", " +
              emp.emp.email+"! THIS CANNOT BE UNDONE! PRESS OK TO PROCEED OR CANCEL TO RETURN TO EMPLOYEE LIST"
          );

          EmployeeService.deleteEmployee(emp.emp.id);

          alert("Employee deleted!")
        navigate(`/employees` );
      }}
    >
      Delete 
    </button>
  );
}

export default DeleteEmpButton;
