import React, { Component } from "react";
import Waypoint from "react-waypoint";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

import NavBar from "./NavBar";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  navBar: {
    backgroundColor: "rgba(255,255,255,0.95)",
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000
  }
});

class StickyNavBar extends Component {
  state = {
    navBar: false
  };

  handleNavBar = ({ currentPosition }) => {
    currentPosition === Waypoint.inside
      ? this.setState({
          navBar: false
        })
      : this.setState({
          navBar: true
        });
  };

  render() {
    const { classes, header, children, onClickLogo } = this.props;
    const { navBar } = this.state;

    return (
      <div className={classes.root}>
        <Slide direction="down" in={navBar} mountOnEnter unmountOnExit>
          <Paper square elevation={1} className={classes.navBar}>
            <NavBar inverted={navBar} onClickLogo={onClickLogo} />
          </Paper>
        </Slide>
        <Waypoint onPositionChange={this.handleNavBar} topOffset="50%">
          {header}
        </Waypoint>
        {children}
      </div>
    );
  }
}
export default withStyles(styles)(StickyNavBar);
