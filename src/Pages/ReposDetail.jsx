import React, { Component } from 'react';
import './ReposDetail.css';
import { NavLink } from "react-router-dom";

class ReposDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
        reposDetail: ""
      }
     this.getReposDetailApi();
  }

  async getReposDetailApi() {
    // ici on appelle l'api sur la route où on veut récupérer les données
    const res = await fetch("https://api.github.com/repos/"+this.props.match.params.username+"/"+this.props.match.params.reposName);
    // on formatte la donnée en json
    const json = await res.json();
    // on remplace users dans notre state qui avant valait [] et qui maintenant contiendra la donnée issue de l'API
    this.setState({
        reposDetail: json,
    });
  }

  render() {
    return (
      <div className="ReposDetail">
        <div className="container">
        <NavLink to={`/UserDetail/${this.props.match.params.username}`} exact>
          <p>Revenir au detail de l'utilisateur</p>
        </NavLink>

          <div className="ReposDetail-inner">
            <p><a href={this.state.reposDetail.html_url} target="blank">{this.state.reposDetail.name}</a></p>
            <p className="ReposDetailDescription">{this.state.reposDetail.description}</p>
            <div className="">
              <p>{this.state.reposDetail.language}</p>
              <p>{this.state.reposDetail.stargazers_count} Like</p>
            </div>
            <p className="ReposDetail_date">{new Date(this.state.reposDetail.created_at).toLocaleString("fr-FR")}</p>
            <p className="ReposDetail_date">{new Date(this.state.reposDetail.updated_at).toLocaleString("fr-FR")}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ReposDetail;
