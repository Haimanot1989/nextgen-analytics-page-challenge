import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import AnalyticsHeader from "./AnalyticsHeader";

const App = () => {
  return (
    <div>
      <Header />
      <AnalyticsHeader />
    </div>
  );
};

render(<App />, document.getElementById("root"));
