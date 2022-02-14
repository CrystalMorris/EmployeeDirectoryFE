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

        EmployeeService.saveEmployee(enteredFName, enteredLName, enteredEmail);
        alert('Employee Saved As: ' + enteredFName + ', ' + enteredLName+ ', '+ enteredEmail )
        

        return navigate('/employees');
    };
    
    
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className ="card col-md-8 offset-md-2">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
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
                                    <div className="form-group offset-7 mt-3">
                                        <button className="btn btn-success" onClick={submitHandler}>Save</button>  
                                        <button className="btn btn-danger" onClick={()=>{navigate('/employees')}} style={{marginLeft: "10px"}}>Cancel</button> 
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