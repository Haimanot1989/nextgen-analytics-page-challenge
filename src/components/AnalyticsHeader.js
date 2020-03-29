import React, { useState, useEffect } from "react";
import useDropDown from "./useDropDown";

//Mock data
const analyticsOptionsList = ["OVERVIEW", "OPTION 2"];
const analyticsHeaderObject = {
  OVERVIEW: [
    { keyType: "Total signups", value: "648" },
    { keyType: "Last Week", value: "12" },
    { keyType: "Total Investments", value: "102" },
    { keyType: "Average Investments", value: "NOK 345,565" },
    { keyType: "Total Exits", value: "23" },
  ],
  "OPTION 2": [
    { keyType: "Option Item A", value: "700" },
    { keyType: "Option Item B", value: "30" },
    { keyType: "Option Item C", value: "8" },
    { keyType: "Option Item D", value: "NOK 345,565" },
    { keyType: "Option Item E", value: "23" },
  ],
};

const KeyNumbers = ({ keyType, value }) => {
  return (
    <li>
      <div className="col">
        <div className="key-numbers-type">{keyType}</div>
        <div className="key-numbers-value">{value}</div>
      </div>
    </li>
  );
};

const AnalyticsOptionItems = ({ analyticsOptions }) => {
  return (
    <ul className="row key-numbers">
      {analyticsOptions.length > 0 &&
        analyticsOptions.map((value, key) => (
          <KeyNumbers {...value} key={key} />
        ))}
    </ul>
  );
};

const AnalyticsHeader = () => {
  const [analyticsOptions, setAnalyticsOptions] = useState([]);
  const [analytics, AnalyticsDropDown] = useDropDown(
    "OVERVIEW",
    analyticsOptionsList
  );

  useEffect(() => {
    const objs = analyticsHeaderObject[analytics];
    setAnalyticsOptions(objs);
  }, [analytics]);

  return (
    <section className="row analytics-header">
      <AnalyticsDropDown />
      <AnalyticsOptionItems analyticsOptions={analyticsOptions} />
    </section>
  );
};

export default AnalyticsHeader;
