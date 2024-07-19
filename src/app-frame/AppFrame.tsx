import React from "react";
import AppFrameConstants from "./AppFrame.constants";
import "./AppFrame.scss";
import AppHeader from "../app-header/AppHeader";

const { APP_FRAME_CONTAINER } = AppFrameConstants.STRING;

export default function AppFrame() {
  return (
    <div className={APP_FRAME_CONTAINER}>
      <AppHeader />
    </div>
  );
}
