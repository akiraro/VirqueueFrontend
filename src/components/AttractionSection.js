import React, { Component } from "react";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ImageHolder from "./ImageHolder";

import engaging from "../images/engaging.jpg";
import saveTime from "../images/save-time.jpg";
import informative from "../images/informative.jpg";
import organized from "../images/organized.jpg";
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
    padding: "100px 0",
    position: "relative"
  },
  pngImg: {
    pointerEvents: "none",
    position: "absolute",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      height: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  fruit: {
    right: 0,
    top: "20%",
    [theme.breakpoints.down("xs")]: {
      top: "21%"
    }
  },
  coffee: {
    left: 0,
    top: "43%",
    [theme.breakpoints.down("xs")]: {
      top: "38%"
    }
  },
  pie: {
    right: 0,
    top: "65%",
    [theme.breakpoints.down("md")]: {
      top: "67%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "82%"
    }
  },
  noodles: {
    left: 0,
    top: "89%",
    [theme.breakpoints.down("sm")]: {
      top: "90%"
    }
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: 500,
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
        <Typography variant="h4" className={classes.title}>
          What do we offer
          <div className={classes.divider} />
        </Typography>
        <ImageHolder image={saveTime} title="save time">
          Your time is more precious than you actually think. Virqueue will do
          the queuing and waiting jobs for you. We will inform you when you need
          to be there.
        </ImageHolder>
        <ImageHolder textImage image={informative} title="informative">
          Find, locate, order, and eat. Restaurants will have their premise
          locations, business hours, menu, and even their specialties ready at
          your fingertips so you know exactly what you need before you fill your
          tummy.
        </ImageHolder>
        <ImageHolder image={engaging} title="engaging">
          Communication is a key to success. Get to know your premises'
          performance based on your in-app restaurant visitors, favourites,
          rating, reviews, and best sellers.
        </ImageHolder>
        <ImageHolder textImage image={organized} title="organized">
          Restaurant management can't be more easier. Restaurants can now
          organize all their orders without having physical records hanging
          around their premises.
        </ImageHolder>
        <PngImg image={coffee} alt="coffee" className={classes.coffee} />
        <PngImg image={fruit} alt="fruit" className={classes.fruit} />
        <PngImg image={noodles} alt="noodles" className={classes.noodles} />
        <PngImg image={pie} alt="pie" className={classes.pie} />
      </div>
    );
  }
}

export default withStyles(styles)(AttractionSection);
