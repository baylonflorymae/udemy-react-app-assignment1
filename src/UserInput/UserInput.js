import React from "react";

const userInput = (props) => {
  return (
    <div>
      <h1>My First Activity</h1>
      <div className="container">
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={props.currentName}
            onChange={props.userNameChangedHandler}
          />
        </div>
        <div className="form-group row-4">
          <label htmlFor="userMsg">User Message:</label>
          <textarea
            type="text"
            id="userMsg"
            className="form-control"
            value={props.currentMsg}
            onChange={props.userMsgChangedHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default userInput;
