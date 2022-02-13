
import { useNavigate } from 'react-router-dom';

function AddEmpButton(){
  let navigate = useNavigate();
 
  
        return(
          <button className='btn btn-primary centered col-3 offset-4'  onClick={() =>{navigate("/add-employee")}}>Add Employee</button>
        )
    
    ;
  }

  


export default AddEmpButton;