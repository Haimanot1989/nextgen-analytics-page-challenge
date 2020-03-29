import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Profile from "./Profile";
const Header = () => {
  return (
    <header className="row header">
      <Logo />
      <Nav />
      <Profile />
    </header>
  );
};
export default Header;
