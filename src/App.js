import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

import About from './Screens/About';
import Dashboard from './Screens/Dashboard';

class App extends Component {

  render() {

    return (
      <div style={styles.container}>

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route path="/" render={() => {
            return <Redirect to="/dashboard" />
          }}/>
        </Switch>

      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
}

export default withRouter(App);
