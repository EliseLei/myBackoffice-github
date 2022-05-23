import * as React from "react";
import { Switch, Route } from "react-router-dom";
import UsersSearch from './Pages/UsersSearch';
import UserDetail from './Pages/UserDetail';
import ReposDetail from './Pages/ReposDetail';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">

      <Switch>
        <Route path="/" exact render={(props) => <UsersSearch {...props} />} />
        <Route path="/UserDetail/:username" exact render={(props) => <UserDetail {...props}/>} />
        <Route path="/UserDetail/:username/:reposName" exact render={(props) => <ReposDetail {...props}/>} />

      </Switch>

    </div>
    );
  }

}


export default App;
