import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Countdown from "react-countdown-now";

import "../index.css";

const styles = theme => ({
  root: {
    backgroundColor: "#252525",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      padding: "5rem 0"
    }
  },
  title: {
    textTransform: "uppercase",
    color: "#fff",
    textAlign: "center"
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
    cursor: "default",
    margin: "1rem 3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem"
    }
  },
  countdownNumber: {
    color: "#007788"
  },
  countdownTitle: {
    color: "#fff"
  },
  buttonContainer: {
    width: "80%",
    maxWidth: "700px",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  button: {
    width: "200px",
    margin: "3rem 1rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0.5rem"
    }
  }
});

class CountdownSection extends Component {
  state = {
    date: "Sat, 01 Dec 2018 12:00:00"
  };

  handleChange = () => e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { date } = this.state;

    const day = ({ days }) => {
      return (
        <Typography variant="h1" className={classes.countdownNumber}>
          {days}
        </Typography>
      );
    };
    const hour = ({ hours }) => {
      return (
        <Typography variant="h1" className={classes.countdownNumber}>
          {hours}
        </Typography>
      );
    };
    const minute = ({ minutes }) => {
      return (
        <Typography variant="h1" className={classes.countdownNumber}>
          {minutes}
        </Typography>
      );
    };
    const second = ({ seconds }) => {
      return (
        <Typography variant="h1" className={classes.countdownNumber}>
          {seconds}
        </Typography>
      );
    };

    return (
      <div className={classes.root}>
        <Typography variant="h3" className={classes.title} gutterBottom>
          Join our Beta App Launch
        </Typography>
        <Typography variant="h5" className={classes.date}>
          01-12-2018
        </Typography>
        <div className={classes.countdownContainer}>
          <div className={classes.countdown}>
            <Countdown date={date} renderer={day} />

            <Typography variant="h6" className={classes.countdownTitle}>
              Days
            </Typography>
          </div>
          <div className={classes.countdown}>
            <Countdown date={date} renderer={hour} />
            <Typography variant="h6" className={classes.countdownTitle}>
              Hours
            </Typography>
          </div>
          <div className={classes.countdown}>
            <Countdown date={date} renderer={minute} />
            <Typography variant="h6" className={classes.countdownTitle}>
              Minutes
            </Typography>
          </div>
          <div className={classes.countdown}>
            <Countdown date={date} renderer={second} />
            <Typography variant="h6" className={classes.countdownTitle}>
              Seconds
            </Typography>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Customer
          </Button>
          <Button variant="outlined" color="primary" className={classes.button}>
            Restaurant
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CountdownSection);
