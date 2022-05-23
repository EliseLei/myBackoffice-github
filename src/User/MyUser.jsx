import React, { Component } from 'react';
import './MyUser.css';

class MyUser extends Component {

  render() {
    return (
      <div className="MyUser">
        <div className="container">
          <div className="MyUser-container">
            <div className="MyUser-inner">
              <div className="MyUser-avatar">
                <img alt="avatar" src={this.props.users.avatar_url} />
              </div>
              {this.props.users.login}
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default MyUser;
