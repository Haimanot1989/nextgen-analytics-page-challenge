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
  return (
    <div>
      <div className="profile-date">{FormattedDateObject().formattedDate}</div>
      <div className="profile-time">{FormattedDateObject().formattedTime}</div>
    </div>
  );
};

//TODO refactor by extracting formatter as a util?
const FormattedDateObject = () => {
  let now = new Date();
  const formattedDate = `${now.getDate()}-${
    now.getMonth() + 1
  }-${now.getFullYear()}`;
  const hourRaw = now.getHours();
  const minute = now.getMinutes();
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedTime =
    hourRaw < 12
      ? `${hourRaw}.${formattedMinute} AM`
      : `${hourRaw - 12}.${formattedMinute} PM`;
  return { formattedDate, formattedTime };
};
export default Profile;
