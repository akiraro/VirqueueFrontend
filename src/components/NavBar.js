import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5rem",
    width: "100%"
  },
  logo: {
    cursor: "pointer",
    padding: "1.3rem"
  }
});

class NavBar extends Component {
  handleClick = name => () => {
    window.location.pathname = name;
  };

  render() {
    const { classes, onClickLogo, inverted } = this.props;

    function Logo(props) {
      return props.inverted ? (
        <img
          className={classes.logo}
          height="50%"
          src={Logo2}
          alt="Virqueue Technologies"
          onClick={props.onClick}
        />
      ) : (
        <img
          className={classes.logo}
          src={Logo1}
          height="50%"
          alt="Virqueue Technologies"
          onClick={props.onClick}
        />
      );
    }

    return (
      <div className={classes.root}>
        <Logo inverted={inverted} onClick={onClickLogo} />
      </div>
    );
  }
}
export default withStyles(styles)(NavBar);
