import React, { Component } from 'react';
import './UsersSearch.css';

class UsersSearch extends Component {
  constructor(props) {
      super(props);
      this.search = this.search.bind(this);
      this.state = {
        username:''
      }
  }

  onChangeUsername(event) {
    event.preventDefault();
    this.setState({
      username:event.target.value,
    });
  }

  search(event) {
    event.preventDefault();
      this.setState({
        username:'',
      });
      this.props.history.push("/UserDetail/"+this.state.username);
    }

  render() {

    return (
      <div className="UsersSearch">
        <div className="container">
          <div className="UsersSearch-inner">
            <h1>Rechercher un utilisateur sur github</h1>
            <form id="userForm" className="AddUserForm">
              <div className="form-item">
                <label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Rechercher un utilisateur"
                    value={this.state.username}
                    onChange={this.onChangeUsername.bind(this)}
                  />
                </label>
              </div>
              <button className="button" onClick={this.search}>Ajouter</button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default UsersSearch;
