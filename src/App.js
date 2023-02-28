import React, { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return(
      <div>
        <h2 className="mainHeader">RESUME BUILDER</h2>
        <Main />
      </div>
    );
  }
}

export default App;
