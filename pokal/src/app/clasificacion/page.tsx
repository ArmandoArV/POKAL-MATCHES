import React from "react";
import styles from "./page.module.css";
import MatchContainer from "@/Containers/MatchContainer/MatchContainer";

export default function Clasificacion() {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.title}>Partidos Actuales</h1>
            <div className={styles.partidosContainer}>
              <MatchContainer intervalMilliseconds={5000} />
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h1 className={styles.title}>Clasificación</h1>
          </div>
        </div>
      </div>
    </>
  );
}
