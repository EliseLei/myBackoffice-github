import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Repos.css';

class Repos extends Component {

  render() {
    return (
      <div className="Repos">
        <div className="container">
          <div className="Repos-container">
            <div className="Repos-inner">

              <NavLink className="button-showdetail" to={`/UserDetail/${this.props.repos.full_name}`}>
              <p>{this.props.repos.name}</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Repos;
