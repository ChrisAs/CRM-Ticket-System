import React from "react";
import { PropTypes } from "prop-types";
export const MessageHistory = ({ msg }) => {
  return (
    <div className="message-history">
      <div className="send">
        <div className="sender">rthrthtr</div>
        <div className="date">yyhrt</div>
      </div>
      <div className="message">aaas</div>
    </div>
  );
};

MessageHistory.propTypes = {
  msg: PropTypes.object.isRequired,
};
