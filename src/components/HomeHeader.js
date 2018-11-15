import React, { Component } from "react";

import NavBar from "./NavBar";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grow from "@material-ui/core/Grow";

import Waypoint from "react-waypoint";

import row_1 from "../images/row_1.png";
import row_2 from "../images/row_2.png";
import row_3 from "../images/row_3.png";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    height: "100%",
    maxHeight: "979px",
    [theme.breakpoints.down("sm")]: {
      height: "1000px",
      position: "relative"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100vh"
    }
  },
  navbar: {
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75px",
    width: "100%"
  },
  content: {
    display: "flex",
    alignSelf: "center",
    maxWidth: "1300px",
    paddingTop: "75px",
    [theme.breakpoints.down("sm")]: {
      height: "100%"
    }
  },
  columnLeft: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      margin: "auto 0",
      width: "50%",
      height: "auto",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: -30,
      zIndex: -1
    }
  },
  columnRight: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      margin: "auto 0",
      width: "50%",
      height: "auto",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: -30,
      zIndex: -1
    }
  },
  image: {
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      filter: "brightness(30%)"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },

  imageContainer: {
    width: "100%",
    marginTop: "2rem"
  },
  container: {
    width: "35%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      justifyContent: "center",
      width: "100%",
      height: "100%"
    }
  },
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      height: "100%"
    }
  },
  text: {
    fontWeight: 300,
    letterSpacing: "2px",
    lineHeight: "140%",
    color: "#fff",
    width: "100%",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      width: "450px",
      alignSelf: "center"
    },
    [theme.breakpoints.down("xs")]: {
      width: "280px",
      textAlign: "center"
    }
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 400,
    color: theme.palette.primary.light,
    letterSpacing: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    marginBottom: "2rem",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "450px",
      alignSelf: "center"
    },
    [theme.breakpoints.down("xs")]: {
      width: "280px",
      alignSelf: "center"
    }
  },
  button: {
    width: "150px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "120px"
    }
  }
});

class Header extends Component {
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
    const { classes, backgroundColor, primary, secondary, id } = this.props;
    const { enter } = this.state;

    return (
      <Waypoint onEnter={this.animate}>
        <div
          className={classes.root}
          id={id}
          style={{
            backgroundColor: backgroundColor,
            zIndex: 0
          }}
        >
          <div className={classes.navbar}>
            <NavBar />
          </div>

          <div className={classes.content}>
            <Grow
              in={enter}
              {...(enter ? { timeout: 1500 } : {})}
              style={{ transitionDelay: enter ? 300 : 0 }}
            >
              <div className={classes.columnLeft}>
                <img
                  className={classes.image}
                  width="100%"
                  height="100%"
                  src={row_1}
                  alt={row_1}
                />
              </div>
            </Grow>
            <Grow
              in={enter}
              {...(enter ? { timeout: 1500 } : {})}
              style={{ transitionDelay: enter ? 500 : 0 }}
            >
              <div className={classes.columnRight}>
                <img
                  className={classes.image}
                  width="100%"
                  height="100%"
                  src={row_2}
                  alt={row_2}
                />
              </div>
            </Grow>
            <div className={classes.container}>
              <Grow in={enter} {...(enter ? { timeout: 1500 } : {})}>
                <div className={classes.textContainer}>
                  <Hidden xsDown>
                    <Typography variant="h2" className={classes.title}>
                      virqueue
                    </Typography>
                  </Hidden>
                  <Hidden smUp>
                    <Typography variant="h3" className={classes.title}>
                      virqueue
                    </Typography>
                  </Hidden>
                  <Typography variant="h5" className={classes.text}>
                    Virqueue offers a smart food ordering system in Malaysia. It
                    is informative and saves you time. This is the smartest
                    technology to get you what to eat. Try us out!
                  </Typography>
                  <div className={classes.buttonContainer}>
                    <Button
                      onClick={primary}
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      i'm in
                    </Button>
                    <Button
                      onClick={secondary}
                      className={classes.button}
                      variant="outlined"
                      color="secondary"
                    >
                      learn more
                    </Button>
                  </div>
                </div>
              </Grow>

              <Hidden smDown>
                <Grow
                  in={enter}
                  {...(enter ? { timeout: 1500 } : {})}
                  style={{ transitionDelay: enter ? 100 : 0 }}
                >
                  <div style={{ pointerEvents: "none" }}>
                    <img
                      src={row_3}
                      alt="row_3"
                      className={classes.imageContainer}
                    />
                  </div>
                </Grow>
              </Hidden>
            </div>
          </div>
        </div>
      </Waypoint>
    );
  }
}
export default withStyles(styles)(Header);
