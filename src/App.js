import React, { Component } from "react";

import Header from "./components/Header";
import AttractionSection from "./components/AttractionSection";
import CountdownSection from "./components/CountdownSection";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AttractionSection />
        <CountdownSection />
        <Footer />
      </div>
    );
  }
}

export default App;
