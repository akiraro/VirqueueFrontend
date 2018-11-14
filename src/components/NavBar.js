import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Logo1 from "../images/Logo1.svg";
import Logo2 from "../images/Logo2.svg";

const styles = theme => ({
  root: {
    display: "flex",
    marginLeft: "2rem",
    alignItems: "center",
    height: "5rem",
    width: "100%"
  },
  logoContainer: {
    cursor: "pointer",
    height: "70%",
    display: "flex",
    alignItems: "center"
  },
  logo: {
    padding: "1rem",
    paddingRight: 0
  },
  name: {
    textTransform: "uppercase",
    fontWeight: 700,
    padding: "1rem"
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
        <div className={classes.logoContainer} onClick={props.onClick}>
          <img
            className={classes.logo}
            height="100%"
            src={Logo2}
            alt="Virqueue Technologies"
          />
          <Typography variant="h6" color="primary" className={classes.name}>
            Virqueue
          </Typography>
        </div>
      ) : (
        <div className={classes.logoContainer} onClick={props.onClick}>
          <img
            className={classes.logo}
            height="100%"
            src={Logo1}
            alt="Virqueue Technologies"
          />
          <Typography variant="h6" color="secondary" className={classes.name}>
            Virqueue
          </Typography>
        </div>
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
