import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const CreateEmpComp =() => {
    const [enteredFName, setFName] = useState('');
    const [enteredLName, setLName] = useState('');
    const [enteredEmail, setEmail] = useState('');


    let navigate = useNavigate();
    const changeFirstNameHandler = (e) => {
        setFName(e.target.value);
    }

    const changeLastNameHandler = (e) => {
        setLName( e.target.value);
    }

    const changeEmailHandler = (e) => {
        setEmail( e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(enteredFName !== '' && enteredLName !=='' && enteredEmail !=='') {

        EmployeeService.saveEmployee(enteredFName, enteredLName, enteredEmail);
        alert('Employee Saved As: ' + enteredFName + ', ' + enteredLName+ ', '+ enteredEmail )

        }else{ alert("All Fields are required. Please try again.");
         return navigate('/add-employee')}

        

        return navigate('/employees');
    };
    
    
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className ="card col-md-8 offset-md-2 ">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body ">
                                <form >
                                    <div className="form-group ">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName"  type="text" className="form-control" value={enteredFName} onChange={changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName"  type="text" className="form-control" value={enteredLName} onChange={changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Email" name="email"  type="text" className="form-control" value={enteredEmail} onChange={changeEmailHandler} />
                                    </div>
                                   
                                      <div className="row justify-content-between">     
                                        <button className="btn btn-success col-3 align-self-left  m-3 " onClick={submitHandler}>Save</button>  
                                    
                                        <button className="btn btn-danger col-3 align-self-right  m-3" onClick={()=>{navigate('/employees')}} style={{marginLeft: "10px"}}>Cancel</button> 
                                    </div>
                   
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default CreateEmpComp;