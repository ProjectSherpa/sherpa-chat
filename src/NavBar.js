import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title="Sherpa Chat"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
