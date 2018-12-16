import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {WeaponPage} from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={WeaponPage} />
        </Switch>
      </div>
    );
  }
}

export default App;