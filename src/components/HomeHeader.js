import React, { Component } from "react";

import NavBar from "./NavBar";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import row_1 from "../images/row_1.png";
import row_2 from "../images/row_2.png";
import meat from "../images/meat.png";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    height: "100vh",
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
    width: "95vw",
    maxWidth: "1200px",
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
      top: 30,
      bottom: 30,
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
      top: 30,
      bottom: 30,
      right: -30,
      zIndex: -1
    }
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      filter: "brightness(30%)"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },

  imageContainer: {
    width: "80%",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "88%"
    }
  },
  textContainer: {
    width: "40%",
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
  text: {
    letterSpacing: "2px",
    lineHeight: "140%",
    color: "#fff",
    width: "90%",
    maxWidth: "300px",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "70%",
      alignSelf: "center",
      textAlign: "center"
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "85%"
    }
  },
  title: {
    textTransform: "uppercase",
    color: theme.palette.primary.light,
    letterSpacing: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  buttonContainer: {
    width: "95%",
    display: "flex",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      justifyContent: "center"
    }
  },
  button: {
    width: "150px",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 1rem"
    }
  }
});

class Header extends Component {
  render() {
    const { classes, backgroundColor, primary, secondary, id } = this.props;

    return (
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
          <div className={classes.columnLeft}>
            <img
              className={classes.image}
              width="100%"
              height="100%"
              src={row_1}
              alt={row_1}
            />
          </div>
          <div className={classes.columnRight}>
            <img
              className={classes.image}
              width="100%"
              height="100%"
              src={row_2}
              alt={row_2}
            />
          </div>
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
              Virqueue offers a smart food ordering system in Malaysia. You can
              find information about a restaurant, order food and pay in the
              smartest way.
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
            <Hidden smDown>
              <div>
                <img src={meat} alt="meat" className={classes.imageContainer} />
              </div>
            </Hidden>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
