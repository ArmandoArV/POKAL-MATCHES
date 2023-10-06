import React from "react";
import styles from "./MatchComponent.module.css";
import soccer1 from "@/images/soccer_balls/soccer1.png";
import soccer2 from "@/images/soccer_balls/soccer2.png";

interface MatchComponentProps {
  homeTeamName: string;
  awayTeamName: string;
  timeStart: string;
  dateStart: string;
  homeScore: number;
  awayScore: number;
  extraScoreHome: number;
  extraScoreAway: number;
}

export default function MatchComponent(props: MatchComponentProps) {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.CardTop}>
        <div className={styles.CardTopLeft}>
          <div className={styles.CardTopImage}>
            <img
              src={soccer1.src}
              alt="soccer ball"
              className={styles.ballImage}
            />
          </div>
          <div className={styles.CardStat}>
            <p>{props.homeScore}</p>
          </div>
        </div>
        <div className={styles.CardTopCenter}>
          <div className={styles.CardTopCenterTop}>
            <p className={styles.teamName}>{props.homeTeamName}</p>
          </div>
          <p>vs</p>
          <div className={styles.CardTopCenterBottom}>
            <p className={styles.teamName}>{props.awayTeamName}</p>
          </div>
        </div>
        <div className={styles.CardTopRight}>
          <div className={styles.CardStat}>
            <p>{props.awayScore}</p>
          </div>
          <div className={styles.CardTopImage}>
            <img
              src={soccer2.src}
              alt="soccer ball"
              className={styles.ballImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.CardBottom}>
        <div className={styles.CardBottomLeft}>
          <p>{props.dateStart}</p>
        </div>
        <div className={styles.CardBottomCenter}>
          <p> | </p>
        </div>
        <div className={styles.CardBottomRight}>
          <p>{props.timeStart}</p>
        </div>
      </div>
    </div>
  );
}
