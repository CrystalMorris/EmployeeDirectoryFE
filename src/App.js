import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import ListEmpComp from './components/ListEmpComp';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmpComp from './components/CreateEmpComp';


function App() {
 
  return (
    <div>
      <Router>
       
            <HeaderComponent />
            
              <div className="container">
                  <Routes>
                      <Route exact path ="/"  element= {<ListEmpComp />}></Route>
                      <Route  path ="/employees" element = {<ListEmpComp />}></Route>
                      <Route  path ="/add-employee" element= {<CreateEmpComp />}></Route>
                  </Routes>
              </div>
            <FooterComponent />
          
      </Router>
    </div>
  );
}

export default App;
