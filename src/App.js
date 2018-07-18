import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar position="static"
              title="React public website"/>
      </div>
    );
  }
}

export default App;
