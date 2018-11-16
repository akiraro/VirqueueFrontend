import React, { Component } from "react";

import StickyNavBar from "./components/StickyNavBar";

import HomeHeader from "./components/HomeHeader";
import AttractionSection from "./components/AttractionSection";
import CountdownSection from "./components/CountdownSection";
import Footer from "./components/Footer";

class App extends Component {
  viewSection = id => () => {
    document.getElementById(id).scrollIntoView();
  };
  //Test//
  render() {
    const header = (
      <div>
        <HomeHeader
          id="header"
          primary={this.viewSection("countdown")}
          secondary={this.viewSection("attraction")}
          backgroundColor="#262626"
        />
      </div>
    );
    return (
      <div>
        <StickyNavBar header={header} onClickLogo={this.viewSection("header")}>
          <div>
            <AttractionSection id="attraction" />
            <CountdownSection id="countdown" />
            <Footer />
          </div>
        </StickyNavBar>
      </div>
    );
  }
}

export default App;
