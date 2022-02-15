import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import ListEmpComp from './components/ListEmpComp';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmpComp from './components/CreateEmpComp';
import UpdateEmpComp from './components/UpdateEmpComp';
import OneEmployee from './components/OneEmployee';


const App=()=> {
  return (
    <div>
      <Router>       
            <HeaderComponent />            
              <div className="container">
                  <Routes>
                      <Route exact path ="/"  element= {<ListEmpComp />}></Route>
                      <Route  path ="/employees" element = {<ListEmpComp />}></Route>
                      <Route  path ="/add-employee" element= {<CreateEmpComp />}></Route>
                      <Route  path="/update-employee/:id" element = {<UpdateEmpComp />}></Route>
                      <Route  path  ="/employees/:id" element={<OneEmployee/>}></Route>
                  </Routes>
              </div>
            <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
