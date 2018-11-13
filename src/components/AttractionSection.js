import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AttractionIT from "./AttractionIT";
import AttractionTI from "./AttractionTI";
import ImageHolder from "./ImageHolder";

import phone from "../images/phone.png";

import "../index.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "4rem 0"
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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

        {/* <AttractionIT image={phone} title="quick">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </AttractionIT>
        <AttractionTI image={phone} title="quick">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </AttractionTI>
        <AttractionIT image={phone} title="quick">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </AttractionIT> */}
      </div>
    );
  }
}

export default withStyles(styles)(AttractionSection);
