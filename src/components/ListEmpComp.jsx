import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import AddEmpButton from './AddEmpButton';



class ListEmpComp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
                employees:[]
        } 
       
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        
            
        })
    
}

 
    

    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List<AddEmpButton /></h2>

                <div className='row'>
                    <table className='table table-striped tabled-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               this.state.employees.map(
                                   employee =>
                                   <tr key= {employee.id}>
                                       <td>{employee.id}</td>
                                       <td>{ employee.firstName }</td>
                                       <td>{ employee.lastName }</td> 
                                       <td>{ employee.email}</td>
                                   </tr>
                               )
                            }
                        </tbody>
                    </table>


                </div>


            </div>
        );
    }
}

export default ListEmpComp;