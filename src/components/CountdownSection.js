import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import Countdown from "react-countdown-now";

import Apply from "./Apply";

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
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem"
    }
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
      margin: "1.5rem"
    }
  },
  countdownNumber: {
    color: "#007788"
  },
  countdownTitle: {
    color: "#fff"
  },
  buttonContainer: {
    width: "70%",
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
    const { classes, id } = this.props;
    const { date } = this.state;

    const day = ({ days }) => {
      return (
        <div className={classes.countdown}>
          <Hidden xsDown>
            <Typography variant="h1" className={classes.countdownNumber}>
              {days}
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Days
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2" className={classes.countdownNumber}>
              {days}
            </Typography>
            <Typography variant="body1" className={classes.countdownTitle}>
              Days
            </Typography>
          </Hidden>
        </div>
      );
    };
    const hour = ({ hours }) => {
      return (
        <div className={classes.countdown}>
          <Hidden xsDown>
            <Typography variant="h1" className={classes.countdownNumber}>
              {hours}
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Hours
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2" className={classes.countdownNumber}>
              {hours}
            </Typography>
            <Typography variant="body1" className={classes.countdownTitle}>
              Hours
            </Typography>
          </Hidden>
        </div>
      );
    };
    const minute = ({ minutes }) => {
      return (
        <div className={classes.countdown}>
          <Hidden xsDown>
            <Typography variant="h1" className={classes.countdownNumber}>
              {minutes}
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Minutes
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h2" className={classes.countdownNumber}>
              {minutes}
            </Typography>
            <Typography variant="body1" className={classes.countdownTitle}>
              Minutes
            </Typography>
          </Hidden>
        </div>
      );
    };
    const second = ({ seconds }) => {
      return (
        <Hidden xsDown>
          <div className={classes.countdown}>
            <Typography variant="h1" className={classes.countdownNumber}>
              {seconds}
            </Typography>
            <Typography variant="h6" className={classes.countdownTitle}>
              Seconds
            </Typography>
          </div>
        </Hidden>
      );
    };

    return (
      <div className={classes.root} id={id}>
        <Hidden xsDown>
          <Typography variant="h2" className={classes.title} gutterBottom>
            Join our Alpha App Launch
          </Typography>
          <Typography variant="h4" className={classes.date}>
            01-12-2018
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography className={classes.title} gutterBottom>
            Join our Alpha <br />
            App Launch
          </Typography>
          <Typography variant="h4" className={classes.date}>
            01-12-2018
          </Typography>
        </Hidden>

        <div className={classes.countdownContainer}>
          <Countdown date={date} renderer={day} />

          <Countdown date={date} renderer={hour} />

          <Countdown date={date} renderer={minute} />

          <Countdown date={date} renderer={second} />
        </div>
        <div className={classes.buttonContainer}>
          <Apply />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CountdownSection);
