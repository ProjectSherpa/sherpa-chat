import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setStat({ open: false });
  }



  render() {
    var here = this;
    return (

      <div>
        <AppBar
          title="Sherpa Song Fetcher"
          onTouchTap={this.handleToggle}
          iconElementRight={<FlatButton label="Help"  onTouchTap={this.handleToggle}/>}
          />


        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open }) }
        >

         <MenuItem linkButton={true} href="http://127.0.0.1:4242/" primaryText="DashBoard" />
          <MenuItem onTouchTap={this.handleClose}>Music</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Videos</MenuItem>
        </Drawer>


      </div>
    );
  }
}
