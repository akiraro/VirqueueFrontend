import React, { Component } from "react";

import HomeHeader from "./components/HomeHeader";
import AttractionSection from "./components/AttractionSection";
import CountdownSection from "./components/CountdownSection";
import Footer from "./components/Footer";

class App extends Component {
  viewSection = id => () => {
    document.getElementById(id).click();
  };
  render() {
    return (
      <div>
        <a href="#attraction" id="attractionLink" style={{ display: "none" }} />
        <a href="#countdown" id="countdownLink" style={{ display: "none" }} />
        <HomeHeader backgroundColor="#262626" />
        {/* <Header
          primary={this.viewSection("countdownLink")}
          secondary={this.viewSection("attractionLink")}
        /> */}
        <AttractionSection id="attraction" />
        <CountdownSection id="countdown" />
        <Footer />
      </div>
    );
  }
}

export default App;
