import React from "react";
import AppFrameConstants from "./AppFrame.constants";
import "./AppFrame.scss";
import AppHeader from "../app-header/AppHeader";
import HomeContent from "../home-content/HomeContent";

const { APP_FRAME_CONTAINER, CONTENT_CONTAINER } = AppFrameConstants.STRING;

export default function AppFrame() {
  return (
    <div className={APP_FRAME_CONTAINER}>
      <AppHeader />
      <div className={CONTENT_CONTAINER}><HomeContent /></div>
    </div>
  );
}
