import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 0"
    }
  },
  containerLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  containerRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  containerMobile: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },

  leftText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "right",
    marginRight: "8rem",
    width: "35%",
    [theme.breakpoints.down("lg")]: {
      margin: "0 3rem"
    }
  },
  rightText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
    marginLeft: "8rem",
    width: "35%",
    [theme.breakpoints.down("lg")]: {
      margin: "0 3rem"
    }
  },
  mobileText: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    marginTop: "15px"
  },
  image: {
    width: "30%",
    textAlign: "center",
    margin: "8rem",
    [theme.breakpoints.down("lg")]: {
      margin: "2rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 0 15px"
    }
  },
  content: {
    letterSpacing: "0.5px",
    width: "70%",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "1rem"
  }
});

class ImageHolder extends Component {
  render() {
    const { classes, textImage, color, children } = this.props;

    const style = {
      backgroundColor: color
    };

    const detail = children ? (
      <div className={classes.content}>
        <Typography variant="subtitle1">{children}</Typography>
      </div>
    ) : (
      <div style={{ display: "none" }} />
    );

    const content = textImage ? (
      <div className={classes.containerRight}>
        <div className={classes.leftText}>
          <Typography className={classes.title} variant="h3" color="primary">
            {this.props.title}
          </Typography>
          {detail}
        </div>
        <div className={classes.image}>
          <img src={this.props.image} height="100%" alt={this.props.image} />
        </div>
      </div>
    ) : (
      <div className={classes.containerLeft}>
        <div className={classes.image}>
          <img src={this.props.image} height="100%" alt={this.props.image} />
        </div>
        <div className={classes.rightText}>
          <Typography className={classes.title} variant="h3" color="primary">
            {this.props.title}
          </Typography>
          {detail}
        </div>
      </div>
    );

    return (
      <div className={classes.root} style={style}>
        <Hidden smDown>{content}</Hidden>
        <Hidden mdUp>
          <div className={classes.containerMobile}>
            <div className={classes.image}>
              <img src={this.props.image} height="75%" alt={this.props.image} />
            </div>
            <div className={classes.mobileText}>
              <Typography
                className={classes.title}
                variant="h4"
                color="primary"
              >
                {this.props.title}
              </Typography>
              {detail}
            </div>
          </div>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(ImageHolder);