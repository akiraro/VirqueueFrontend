import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    maxWidth: "1100px"
  },
  containerMobile: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "3rem"
  },

  leftText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "right",
    marginRight: "8rem",
    width: "60%",
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
    width: "60%",
    [theme.breakpoints.down("lg")]: {
      margin: "0 3rem"
    }
  },
  mobileText: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    marginTop: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    }
  },
  image: {
    textAlign: "center",
    margin: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      alignSelf: "center",
      margin: "0 0 15px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  content: {
    letterSpacing: "0.5px",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 500,
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
        <Typography variant="h6">{children}</Typography>
      </div>
    ) : (
      <div style={{ display: "none" }} />
    );

    const content = textImage ? (
      <div className={classes.container}>
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
      <div className={classes.container}>
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
              <img src={this.props.image} width="40%" alt={this.props.image} />
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
