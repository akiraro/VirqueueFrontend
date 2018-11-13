import React, { Component } from "react";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ImageHolder from "./ImageHolder";

import phone from "../images/phone.png";
import chicken from "../images/chicken.png";
import coffee from "../images/coffee.png";
import fruit from "../images/fruit.png";
import noodles from "../images/noodles.png";
import pie from "../images/pie.png";

import "../index.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "5rem 0",
    position: "relative"
  },
  pngImg: {
    position: "absolute",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      height: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "150px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "75px"
    }
  },
  fruit: {
    right: 0,
    top: "23%",
    [theme.breakpoints.down("md")]: {
      top: "27%"
    },
    [theme.breakpoints.down("sm")]: {
      top: "24%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "21%"
    }
  },
  coffee: {
    left: 0,
    top: "35%",
    [theme.breakpoints.down("sm")]: {
      top: "37%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "38%"
    }
  },
  noodles: {
    left: 0,
    top: "58%",
    [theme.breakpoints.down("sm")]: {
      top: "68%"
    }
  },
  chicken: {
    right: 0,
    top: "66%",
    [theme.breakpoints.down("sm")]: {
      top: "57%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "52%"
    }
  },
  pie: {
    right: 0,
    top: "88%",
    [theme.breakpoints.down("md")]: {
      top: "90%"
    },
    [theme.breakpoints.down("sm")]: {
      top: "85%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "82%"
    }
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
    textTransform: "uppercase"
  },
  divider: {
    margin: "1rem auto",
    width: "60%",
    borderBottom: "2px solid #007788"
  }
});

class AttractionSection extends Component {
  render() {
    const { classes, id } = this.props;

    function PngImg(props) {
      return (
        <img
          src={props.image}
          alt={props.alt}
          className={classNames(classes.pngImg, props.className)}
        />
      );
    }

    return (
      <div className={classes.root} id={id}>
        <Typography variant="h3" className={classes.title}>
          What are we solving
          <div className={classes.divider} />
        </Typography>
        <ImageHolder image={phone} title="quick">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </ImageHolder>
        <ImageHolder textImage image={phone} title="quick">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </ImageHolder>
        <ImageHolder image={phone} title="quick">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </ImageHolder>
        <PngImg image={chicken} alt="chicken" className={classes.chicken} />
        <PngImg image={coffee} alt="coffee" className={classes.coffee} />
        <PngImg image={fruit} alt="fruit" className={classes.fruit} />
        <PngImg image={noodles} alt="noodles" className={classes.noodles} />
        <PngImg image={pie} alt="pie" className={classes.pie} />
      </div>
    );
  }
}

export default withStyles(styles)(AttractionSection);
