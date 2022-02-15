
import { useNavigate } from 'react-router-dom';
//import React, { useState } from 'react';


function SelectEmpButton(emp){
  let navigate = useNavigate();
  
 return(
          <button className='btn btn-primary centered'  onClick={()=>(navigate(`/employees/${emp.emp.id}`))}>View</button>
        )

  };


export default SelectEmpButton;