import React, { Component } from "react";
import AddEmpButton from "./AddEmpButton";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://localhost:3000/employees" className="navbar-brand  offset-3">
                Employee Management App
              </a>
            </div><AddEmpButton />
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
