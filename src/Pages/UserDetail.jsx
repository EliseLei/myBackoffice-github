import React, { Component } from 'react';
import MyUser from '../User/MyUser';
import Repos from '../Repos/Repos';
import './UserDetail.css';
import { NavLink } from "react-router-dom";

class UserDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
        repos: [{full_name:"coco"}],
        users: ""
      }
     this.getUsersApi();
     this.getReposApi();
  }

  async getUsersApi() {
    // ici on appelle l'api sur la route où on veut récupérer les données
    const res = await fetch("https://api.github.com/users/"+this.props.match.params.username);
    // on formatte la donnée en json
    const json = await res.json();
    // on remplace users dans notre state qui avant valait [] et qui maintenant contiendra la donnée issue de l'API
    this.setState({
        users: json,
    });

  }

  async getReposApi() {
    // ici on appelle l'api sur la route où on veut récupérer les données
    const res = await fetch("https://api.github.com/users/"+this.props.match.params.username+"/repos");
    // on formatte la donnée en json
    const json = await res.json();
    // on remplace users dans notre state qui avant valait [] et qui maintenant contiendra la donnée issue de l'API
    this.setState({
        repos: json,
    });
  }


  render() {
    return (
      <div className="UserDetail">
        <div className="container">
          <NavLink to="/" exact>
            <p>Revenir à la recherche</p>
          </NavLink>
           <MyUser users={this.state.users}/>
           {this.state.repos.map((repos, indexOfRepos) =>  {
             return (
               <div key={indexOfRepos}>
                 <Repos indexOfRepos={indexOfRepos} repos={repos} />
               </div>
             );
           })}
        </div>
      </div>
    );
  }
}
export default UserDetail;
