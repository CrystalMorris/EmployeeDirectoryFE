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
        <header >
          <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark px-5">
            <div>
              <a href="/employees" className="navbar-brand col-md-2 ">
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
