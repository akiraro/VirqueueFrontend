import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../index.css";

const styles = theme => ({
  root: {
    backgroundColor: "#252525",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem auto"
  },
  title: {
    textTransform: "uppercase",
    color: "#fff"
  },
  date: {
    color: "#888"
  },
  countdownContainer: {
    display: "flex",
    alignItems: "center",
    margin: "3rem 0"
  },
  countdown: {
    margin: "1rem 3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  countdownNumber: {
    color: "#007788"
  },
  countdownTitle: {
    color: "#fff"
  },
  button: {
    width: "250px",
    margin: "3rem 0"
  }
  //   textField: {
  //     width: "350px"
  //   },
  //   cssLabel: {
  //     color: "#fff",

  //     "&$cssFocused": {
  //       color: "#007788"
  //     }
  //   },
  //   cssOutlinedInput: {
  //     "&$cssFocused $notchedOutline": {
  //       borderColor: "#007788"
  //     },
  //     borderColor: "#fff"
  //   },
  //   cssFocused: {},
  //   notchedOutline: {
  //     borderColor: "#fff"
  //   }
});

class Countdown extends Component {
  state = {
    email: ""
  };

  handleChange = () => e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" className={classes.title} gutterBottom>
          Join our Beta App Testing
        </Typography>
        <Typography variant="h5" className={classes.date}>
          01-12-2018
        </Typography>
        <div className={classes.countdownContainer}>
          <div className={classes.countdown}>
            <Typography variant="h1" className={classes.countdownNumber}>
              24
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Days
            </Typography>
          </div>
          <div className={classes.countdown}>
            <Typography variant="h1" className={classes.countdownNumber}>
              13
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Hours
            </Typography>
          </div>
          <div className={classes.countdown}>
            <Typography variant="h1" className={classes.countdownNumber}>
              58
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Minutes
            </Typography>
          </div>
          <div className={classes.countdown}>
            <Typography variant="h1" className={classes.countdownNumber}>
              07
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Seconds
            </Typography>
          </div>
        </div>
        <Button variant="outlined" color="primary" className={classes.button}>
          Apply now
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Countdown);
