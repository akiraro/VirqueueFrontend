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
      height: "auto",
      margin: "5rem 0"
    }
  },
  box: {
    position: "absolute",
    zIndex: -1,
    height: "30%",
    width: "100%",
    border: "1px solid #004b5b",
    backgroundColor: "#004b5b",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  content: {
    width: "90%",
    maxWidth: "1200px",
    margin: "auto",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  image: {
    height: "80%"
  },
  title: {
    textTransform: "uppercase",
    color: "#4ca6b8",
    margin: "0 2rem",
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.primary.dark,
      width: "50%",
      textAlign: "center",
      margin: "2rem 0 0"
    }
  },
  desc: {
    color: "#fff",
    textAlign: "right",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      color: "#000",
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
          <Typography variant="body2" className={classes.desc}>
            {children}
          </Typography>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.image}>
            <img src={image} alt={image} height="100%" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AttractionTI);
