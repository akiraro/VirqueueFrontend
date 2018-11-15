import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Grow from "@material-ui/core/Grow";
import Zoom from "@material-ui/core/Zoom";

import Waypoint from "react-waypoint";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "3rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0"
    }
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "150%",
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
    marginRight: "5rem",
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
    marginLeft: "5rem",
    width: "60%",
    [theme.breakpoints.down("lg")]: {
      margin: "0 3rem"
    }
  },
  mobileText: {
    width: "70%",
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
  imageContainer: {
    pointerEvents: "none",
    textAlign: "center",
    margin: "2rem",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      alignSelf: "center",
      margin: "0 0 15px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    }
  },
  image: {
    borderRadius: "10px"
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
  state = {
    enter: false
  };
  animate = ({ currentPosition }) => {
    currentPosition === Waypoint.inside
      ? this.setState({
          enter: true
        })
      : this.setState({
          enter: false
        });
  };

  render() {
    const { classes, textImage, color, children } = this.props;
    const { enter } = this.state;

    const style = {
      backgroundColor: color
    };

    const detail = children ? (
      <div className={classes.content}>
        <Typography variant="h5">{children}</Typography>
      </div>
    ) : (
      <div style={{ display: "none" }} />
    );

    const content = textImage ? (
      <div className={classes.container}>
        <Grow in={enter} {...(enter ? { timeout: 500 } : {})}>
          <div className={classes.leftText}>
            <Typography className={classes.title} variant="h4" color="primary">
              {this.props.title}
            </Typography>
            {detail}
          </div>
        </Grow>
        <div className={classes.imageContainer}>
          <Zoom
            in={enter}
            {...(enter ? { timeout: 800 } : {})}
            style={{ transitionDelay: enter ? 300 : 0 }}
          >
            <img
              className={classes.image}
              src={this.props.image}
              width="100%"
              alt={this.props.image}
            />
          </Zoom>
        </div>
      </div>
    ) : (
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Zoom
            in={enter}
            {...(enter ? { timeout: 800 } : {})}
            style={{ transitionDelay: enter ? 300 : 0 }}
          >
            <img
              className={classes.image}
              src={this.props.image}
              width="100%"
              alt={this.props.image}
            />
          </Zoom>
        </div>
        <Grow in={enter} {...(enter ? { timeout: 500 } : {})}>
          <div className={classes.rightText}>
            <Typography className={classes.title} variant="h4" color="primary">
              {this.props.title}
            </Typography>
            {detail}
          </div>
        </Grow>
      </div>
    );

    return (
      <Waypoint onEnter={this.animate} bottomOffset="50%">
        <div className={classes.root} style={style}>
          <Hidden smDown>{content}</Hidden>
          <Hidden mdUp>
            <div className={classes.containerMobile}>
              <div className={classes.imageContainer}>
                <Grow in={enter} {...(enter ? { timeout: 500 } : {})}>
                  <img
                    className={classes.image}
                    src={this.props.image}
                    width="100%"
                    alt={this.props.title}
                  />
                </Grow>
              </div>
              <Zoom
                in={enter}
                {...(enter ? { timeout: 800 } : {})}
                style={{ transitionDelay: enter ? 100 : 0 }}
              >
                <div className={classes.mobileText}>
                  <Typography
                    className={classes.title}
                    variant="h3"
                    color="primary"
                  >
                    {this.props.title}
                  </Typography>
                  {detail}
                </div>
              </Zoom>
            </div>
          </Hidden>
        </div>
      </Waypoint>
    );
  }
}

export default withStyles(styles)(ImageHolder);
