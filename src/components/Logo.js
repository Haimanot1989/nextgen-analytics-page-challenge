import React from "react";

const Logo = () => {
  return (
    <div className="col-3-6 logo">
      <a href="/">
        <img
          src={require("../../assets/images/logo.png")}
          alt="Innovation Norway logo"
        />
      </a>
    </div>
  );
};

export default Logo;
