import React, { Component } from "react";
import isEmpty from "./isEmpty";
import classNames from "classnames";
import { signUpUser } from "../action";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Tooltip from "@material-ui/core/Tooltip";

import Close from "@material-ui/icons/Close";

import "../index.css";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  paper: {
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      margin: 0
    }
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "90%"
  },
  form: {
    margin: "5rem 0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  close: {
    height: "2rem",
    width: "2rem",
    cursor: "pointer"
  },
  title: {
    textTransform: "uppercase",
    marginBottom: "1rem"
  },
  desc: {
    marginBottom: "2rem",
    textAlign: "center",
    width: "60%"
  },
  formAction: {
    width: "60%",
    margin: "1rem 0"
  },
  success: {
    backgroundColor: "#3cb371"
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  snackbar: {
    position: "absolute",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0.3rem 0"
  },
  dialog: {
    height: "217vw"
  },
  divider: {
    margin: "0.5rem auto",
    width: "60%",
    borderBottom: "2px solid #007788"
  }
});

class Apply extends Component {
  state = {
    name: "",
    email: "",
    nameError: false,
    emailError: false,
    snackbar: false,
    dialog: false,
    status: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email } = this.state;
    const data = {
      uname: name,
      uemail: email
    };
    signUpUser(data).then(res => {
      if (res) {
        this.setState({
          status: res.status,
          message: res.message,
          snackbar: true
        });
        if (res.status !== 200)
          setTimeout(
            () =>
              this.setState({
                snackbar: false
              }),
            3000
          );
      }
    });
  };

  handleChange = error => event => {
    this.setState({
      [event.target.name]: event.target.value,
      [error]: isEmpty(event.target.value)
    });
  };

  handleClose = () => {
    this.setState({
      dialog: false,
      snackbar: false,
      status: "",
      name: "",
      email: ""
    });
  };

  handleOpen = () => () => {
    this.setState({ dialog: true });
  };

  snackbarClose = () => {
    this.setState({
      snackbar: false
    });
  };

  render() {
    const { classes, fullScreen } = this.props;
    const {
      name,
      email,
      nameError,
      emailError,
      snackbar,
      status,
      dialog,
      message
    } = this.state;

    function SnackbarMessage(props) {
      return !isEmpty(props.status) ? (
        props.status === 200 ? (
          <div className={classNames(classes.success, props.className)}>
            <Typography variant="subtitle2" style={{ color: "white" }}>
              {props.message}
            </Typography>
          </div>
        ) : (
          <div className={classNames(classes.error, props.className)}>
            <Typography variant="subtitle2" style={{ color: "white" }}>
              {props.message}
            </Typography>
          </div>
        )
      ) : (
        <div style={{ display: "none" }} />
      );
    }

    const modal = (
      <Paper elevation={0} className={classes.paper}>
        <div className={classes.header}>
          <Tooltip title="Close" placement="bottom">
            <Close onClick={this.handleClose} className={classes.close} />
          </Tooltip>
        </div>

        <form onSubmit={this.handleSubmit} className={classes.form}>
          <Typography className={classes.title} variant="h4">
            early sign up
            <div className={classes.divider} />
          </Typography>
          <Typography className={classes.desc} variant="body1">
            The app is currently in alpha stage and we need your help. Sign up
            and be the first ones to experience the smartest way to order food.
          </Typography>
          <TextField
            error={nameError}
            name="name"
            className={classes.formAction}
            variant="outlined"
            multiline
            label="Name"
            value={name}
            onChange={this.handleChange("nameError")}
          />
          <TextField
            error={emailError}
            name="email"
            type="email"
            className={classes.formAction}
            variant="outlined"
            label="Email"
            value={email}
            onChange={this.handleChange("emailError")}
          />
          <Button
            style={{ padding: "1rem" }}
            onClick={this.handleSubmit}
            className={classes.formAction}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Typography className={classes.desc} variant="body1">
            We will notify you via email. Stay tuned!
          </Typography>
        </form>
      </Paper>
    );

    return (
      <div className={classes.root}>
        <Button
          style={{ width: "250px" }}
          variant="outlined"
          color="secondary"
          onClick={this.handleOpen()}
        >
          Sign Up
        </Button>
        <Dialog
          open={dialog}
          scroll="body"
          fullScreen={fullScreen}
          classes={{
            paperFullScreen: classes.dialog
          }}
        >
          <Slide direction="down" in={snackbar}>
            <SnackbarMessage
              className={classes.snackbar}
              status={status}
              message={message}
            />
          </Slide>
          {modal}
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(
  withMobileDialog({ breakpoint: "xs" })(Apply)
);
