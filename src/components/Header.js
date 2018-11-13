import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import "../index.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-end"
    }
  },
  content: {
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    }
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "10px",
    color: theme.palette.primary.main,
    marginBottom: "1rem"
  },
  text: {
    textAlign: "center",
    fontWeight: 700
  },
  buttonContainer: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "center"
  },
  button: {
    width: "150px",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 1rem"
    }
  }
});

class Header extends Component {
  render() {
    const { classes, primary, secondary } = this.props;
    return (
      <div className={classes.root} id="header">
        <div className={classes.content}>
          <Hidden xsDown>
            <Typography variant="h2" className={classes.title}>
              virqueue
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h3" className={classes.title}>
              virqueue
            </Typography>
          </Hidden>
          <Typography variant="h6" className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              onClick={primary}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              i'm in
            </Button>
            <Button
              onClick={secondary}
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              learn more
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
