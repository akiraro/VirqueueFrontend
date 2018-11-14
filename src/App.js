import React, { Component } from "react";

import HomeHeader from "./components/HomeHeader";
import AttractionSection from "./components/AttractionSection";
import CountdownSection from "./components/CountdownSection";
import Footer from "./components/Footer";

class App extends Component {
  viewSection = id => () => {
    document.getElementById(id).scrollIntoView();
  };
  render() {
    return (
      <div>
        {/* <a href="#attraction" id="attractionLink" style={{ display: "none" }} />
        <a href="#countdown" id="countdownLink" style={{ display: "none" }} /> */}
        <HomeHeader
          primary={this.viewSection("countdown")}
          secondary={this.viewSection("attraction")}
          backgroundColor="#262626"
        />
        <AttractionSection id="attraction" />
        <CountdownSection id="countdown" />
        <Footer />
      </div>
    );
  }
}

export default App;
