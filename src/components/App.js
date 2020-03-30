import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import AnalyticsHeader from "./AnalyticsHeader";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <Header />
      <AnalyticsHeader />
      <Main />
    </div>
  );
};

render(<App />, document.getElementById("root"));
