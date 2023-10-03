"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import MatchComponent from "@/Components/MatchComponent/MatchComponent";
import { API_URL } from "@/Constants";

interface MatchData {
  homeTeamNickname: string;
  awayTeamNickname: string;
  homeTeamScore?: number | undefined;
  awayTeamScore?: number | undefined;
  homePenaltyScore: number;
  awayPenaltyScore: number;
}

export default function Clasificacion() {
  const bearerToken = "95e5e205-8f52-4308-a611-67c72bc7a9b8";

  const [matchData, setMatchData] = useState([] as any); // Initialize state to store match data

  useEffect(() => {
    fetch(
      `${API_URL}/match/list/matchday/ec1f74c9-0f19-4742-92b8-a9458f90c30a`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data:", data);
        if (!Array.isArray(data.data) || data.data.length === 0) {
          console.log("Data is empty or undefined.");
          return;
        }
        const matchData = data.data.map((match: any) => ({
          homeTeamNickname: match.homeTeam?.nickName || "No nickname",
          awayTeamNickname: match.awayTeam?.nickName || "No nickname",
          homeTeamScore: match.homeScore || undefined,
          awayTeamScore: match.awayScore || undefined,
          homePenaltyScore: match.homePenaltyScore || 1,
          awayPenaltyScore: match.awayPenaltyScore || 1,
        }));

        console.log("Match Nicknames:", matchData);
        setMatchData(matchData); // Set the state with the fetched match data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.title}>Partidos Actuales</h1>
            <div className={styles.partidosContainer}>
              {matchData.map((match: MatchData, index: number) => (
                <MatchComponent
                  key={index}
                  homeTeamName={match.homeTeamNickname}
                  awayTeamName={match.awayTeamNickname}
                  timeStart="20:00"
                  dateStart="21/10/2021"
                  homeScore={match.homeTeamScore || 0}
                  awayScore={match.awayTeamScore || 0}
                  extraScoreHome={match.homePenaltyScore}
                  extraScoreAway={match.awayPenaltyScore}
                />
              ))}
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
