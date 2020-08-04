import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImage from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="Back" />
      </Link>
      <img src={logoImage} alt="Proffy" />
    </div>
    <div className="header-content">
      <strong>{title}</strong>
      {children}
    </div>
  </header>
);

export default PageHeader;
