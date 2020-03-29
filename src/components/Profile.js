import React from "react";

const Profile = () => {
  return (
    <div className="col-1-6 profile">
      <img src={require("../../assets/images/avatar.png")} alt="Avatar" />
      <span className="profile-name">Elsa Andersen</span>
      <PlacementRepresentation />
    </div>
  );
};

const PlacementRepresentation = () => {
  let now = new Date();
  const formattedDate = `${now.getDate()}-${
    now.getMonth() + 1
  }-${now.getFullYear()}`;
  const hourRaw = now.getHours();
  const minute = now.getMinutes();
  const formattedTime =
    hourRaw < 12 ? `${hourRaw}.${minute} AM` : `${hourRaw - 12}.${minute} PM`;
  return (
    <div>
      <div className="profile-date">{formattedDate}</div>
      <div className="profile-time">{formattedTime}</div>
    </div>
  );
};
export default Profile;
