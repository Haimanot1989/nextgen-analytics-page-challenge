import React from "react";

/* 
  //TODO figure out why require does not take variables
const SideBarIcon = ({ path }) => {
  return (
    <div>
      <img src={require("../../assets/icons/Group 174.svg")} alt="Funds" />
    </div>
  );
};
 */

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <div className="sidebar-icon">
          <img src={require("../../assets/icons/Group 174.svg")} alt="Group" />
        </div>
      </li>
      <li>
        <div className="sidebar-icon">
          <img src={require("../../assets/icons/funds.svg")} alt="Funds" />
        </div>
      </li>
      <li>
        <div className="sidebar-icon">
          <img src={require("../../assets/icons/Path 188.svg")} alt="Path" />
        </div>
      </li>
      <li>
        <div className="sidebar-icon">
          <img src={require("../../assets/icons/history.svg")} alt="History" />
        </div>
      </li>
      <li>
        <div className="sidebar-icon">
          <img
            src={require("../../assets/icons/verification-window-button.svg")}
            alt="Verification window button"
          />
        </div>
      </li>
      <li>
        <div className="sidebar-icon">
          <img
            src={require("../../assets/icons/locked-padlock (1).svg")}
            alt="Locked padlock"
          />
        </div>
      </li>
    </ul>
  );
};

const MainContentNavItems = ({ item }) => {
  return (
    <li className={""} key={item}>
      {item}
    </li>
  );
};
const MainContentNav = () => {
  const navItems = ["Signups", "Investments", "Revenue", "Exits", "Trades"];
  return (
    <ul className="main-content-nav">
      {navItems.map((item) => (
        <MainContentNavItems item={item} key={item} />
      ))}
    </ul>
  );
};
const ChartContainer = () => {
  return (
    <div className="chart-container">
      <LeftChartContainer />
      <RightChartContainer />
    </div>
  );
};

const RightChartContainer = () => {
  return (
    <div className="sub-chart-container">
      <Chart info="chart3" />
      <Chart info="chart4" />
      <Chart info="chart5" />
    </div>
  );
};

const LeftChartContainer = () => {
  return (
    <div className="sub-chart-container">
      <Chart info="chart1" />
      <Chart info="chart2" />
    </div>
  );
};
const Chart = ({ info }) => {
  return <div className="single-chart-container">{info}</div>;
};

const MainContent = () => {
  return (
    <div className="main-content">
      <MainContentNav />
      <ChartContainer />
    </div>
  );
};

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <MainContent />
    </main>
  );
};

export default Main;
