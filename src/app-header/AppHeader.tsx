import React from "react";
import AppHeaderConstants from "./AppHeader.constants";
import "./AppHeader.scss";
import logo from "../logo.svg";

const {
  APP_HEADER_CONTAINER,
  APP_HEADER_HOME,
  APP_HEADER_TITLE,
  APP_HEADER_LOGO,
  APP_HEADER_LOGO_CONTAINER
} = AppHeaderConstants.STRING;

export default function AppHeader() {
  return (
    <div className={APP_HEADER_CONTAINER}>
      <div className={APP_HEADER_HOME}>
        <div className={APP_HEADER_TITLE}>App Name</div>
        <div className={APP_HEADER_LOGO_CONTAINER}>
        <img src={logo} className={APP_HEADER_LOGO} alt="logo" />
        </div>
      </div>
    </div>
  );
}
