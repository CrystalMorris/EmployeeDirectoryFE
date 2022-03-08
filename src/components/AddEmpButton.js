import { useNavigate } from "react-router-dom";

function AddEmpButton() {
  let navigate = useNavigate();

  return (
    <button
      className="addemployee btn btn-primary  offset-6"
      onClick={() => {
        navigate("/add-employee");
      }}
    >
      Add Employee
    </button>
  );
}

export default AddEmpButton;
