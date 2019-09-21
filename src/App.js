import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import SidePanel from './components/sidepanel/sidepanel';


class App extends React.Component {
  state = {
    user: 'John'
  }


  render() {
    return(
      <div>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/sidepanel' component={SidePanel} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
      </div>
    ) 

    
  }
}

export default App;