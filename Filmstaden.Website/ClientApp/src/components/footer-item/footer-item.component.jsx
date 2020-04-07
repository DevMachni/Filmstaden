import React from "react";
import { withRouter } from "react-router-dom";
import "./footer-item.styles.css";

const FooterItem = ({ title, linkUrl, history, match }) => {
  return (
    <div
      className="footer-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {title}
    </div>
  );
};

export default withRouter(FooterItem);
