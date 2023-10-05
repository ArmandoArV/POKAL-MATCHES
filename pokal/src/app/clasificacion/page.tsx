"use client";
import React from "react";
import styles from "./page.module.css";
import ClassificationContainer from "@/Containers/ClassificationContainer/ClassificationContainer";
import { API_URL, bearerToken, seasonUUID } from "@/constants";

export default function Clasificacion() {
  const renderClassificationContainer = (showValue: number) => (
    <ClassificationContainer show={showValue} seasonUUID={seasonUUID} />
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.topContainer}>
          <div className={styles.leftContainer}>
            {renderClassificationContainer(0)}
          </div>
          <div className={styles.rightContainer}>
            {renderClassificationContainer(1)}
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.leftContainer}>
            {renderClassificationContainer(2)}
          </div>
          <div className={styles.rightContainer}>
            {renderClassificationContainer(3)}
          </div>
        </div>
      </div>
    </div>
  );
}
