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

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  paper: {
    margin: "2rem 0",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    alignSelf: "center"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "90%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  close: {
    height: "2rem",
    width: "2rem",
    cursor: "pointer"
  },
  title: {
    marginBottom: "10px"
  },
  textField: {
    width: "60%",
    marginTop: "25px"
  },
  button: {
    width: "60%",
    margin: "30px 0"
  },
  desc: {
    width: "50%",
    textAlign: "center"
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
        <Typography className={classes.title} variant="h4">
          Apply Now
        </Typography>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <TextField
            error={nameError}
            name="name"
            className={classes.textField}
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
            className={classes.textField}
            variant="outlined"
            label="Email"
            value={email}
            onChange={this.handleChange("emailError")}
          />
          <Button
            onClick={this.handleSubmit}
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>

        <Typography variant="body1" className={classes.desc}>
          You will be notfied through email as soon as your request is
          processed.
        </Typography>
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
