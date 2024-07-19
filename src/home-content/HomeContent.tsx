import React from "react";
import HomeContentConstants from "./HomeContent.constants";
import "./HomeContent.scss";

const {
  HOME_CONTENT_CONTAINER,
  GYM_MEMO_CONTAINER,
  WOD_INFO_CONTAINER,
  LEFT_PANELS_CONTAINER,
  RIGHT_PANELS_CONTAINER,
  PR_CONTAINER,
  WOD_NOTES_CONTAINER
} = HomeContentConstants.STRING;

export default function HomeContent() {
  return (
    <div className={HOME_CONTENT_CONTAINER}>
      <div className={GYM_MEMO_CONTAINER}>OPTIONAL GYM MEMO</div>
      <div className={WOD_INFO_CONTAINER}>
        <div className={LEFT_PANELS_CONTAINER}>TODAYS WOD</div>
        <div className={RIGHT_PANELS_CONTAINER}>
          <div className={PR_CONTAINER}>PERSONAL BESTS (related to workout)</div>
          <div className={WOD_NOTES_CONTAINER}>WOD NOTES</div>
        </div>
      </div>
    </div>
  );
}
