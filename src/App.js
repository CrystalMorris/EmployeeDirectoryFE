import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import ListEmpComp from './components/ListEmpComp';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
            <HeaderComponent />
              <div className="container">
                  <Routes>
                      <Route exact path ="/"  element= {<ListEmpComp />}></Route>
                      <Route exact path ="/employees" element = {<ListEmpComp />}></Route>
                      
                  </Routes>
              </div>
            <FooterComponent />
          </div>
      </Router>
    </div>
  );
}

export default App;
