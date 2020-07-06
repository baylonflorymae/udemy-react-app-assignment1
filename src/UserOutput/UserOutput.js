import React from "react";

const UserOuput = (props) => {
  const style = {
    marginTop: "15px",
  };

  return (
    <div className="container" style={style}>
      <h4>User Name: {props.user}</h4>
      <p>User Message: {props.message}</p>
    </div>
  );
};

export default UserOuput;
