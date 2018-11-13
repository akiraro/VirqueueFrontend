import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "../index.css";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2rem 5rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      margin: "2rem"
    }
  },
  text: {
    display: "flex",
    color: "#888",
    cursor: "pointer"
  },
  social: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem"
    }
  }
});

class Footer extends Component {
  handlePage = name => () => {
    window.location.pathname = name;
  };

  handleSocial = url => () => {
    window.open(url);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.text}>
          &reg; 2018 Virqueue Technologies
        </Typography>
        <div className={classes.social}>
          <i className="icon ion-logo-facebook" />
          <i className="icon ion-logo-twitter" />
          <i className="icon ion-logo-instagram" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
