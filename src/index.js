import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div style={{ fontSize: "10rem", paddingTop: "10rem" }}>Hi there!</div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
