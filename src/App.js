import React, { Component } from "react";

import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Countdown />
        <Footer />
      </div>
    );
  }
}

export default App;
