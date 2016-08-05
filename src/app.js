import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import StatsContainer from './StatsContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
 
const App = () => (
  <MuiThemeProvider>
    <div>
      <NavBar />
      <StatsContainer />
    </div>
  </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('mount')
  );
});
