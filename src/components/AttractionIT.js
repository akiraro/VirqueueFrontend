import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "../index.css";

const styles = theme => ({
  root: {
    display: "flex",
    height: "500px",
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  box: {
    position: "absolute",
    zIndex: -1,
    height: "30%",
    width: "100%",
    border: "1px solid #4ca6b8",
    backgroundColor: "#4ca6b8",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  content: {
    maxWidth: "1200px",
    width: "90%",
    margin: "auto",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  image: {
    height: "80%"
  },
  title: {
    textTransform: "uppercase",
    color: "#004b5b",
    margin: "0 2rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      textAlign: "center",
      margin: "2rem 0 0"
    }
  },
  desc: {
    color: "#000",
    textAlign: "left",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      textAlign: "center",
      margin: "1rem 0"
    }
  }
});

class AttractionTI extends Component {
  render() {
    const { classes, title, children, image } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.box} />
        <div className={classes.content}>
          <div className={classes.image}>
            <img src={image} alt={image} height="100%" />
          </div>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" className={classes.desc}>
            {children}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AttractionTI);
