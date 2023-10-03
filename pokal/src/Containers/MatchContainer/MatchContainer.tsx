"use client";
import React, { useEffect, useState, useCallback } from "react";
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

interface MatchContainerProps {
  intervalMilliseconds: number; // Prop to specify the interval duration
}

const DEFAULT_INTERVAL_MS = 5000; // Default interval is 5000 ms (5 seconds)

export default function MatchContainer({
  intervalMilliseconds,
}: MatchContainerProps) {
  const bearerToken = "95e5e205-8f52-4308-a611-67c72bc7a9b8";

  const [matchData, setMatchData] = useState([] as any); // Initialize state to store match data
  const [visibleMatches, setVisibleMatches] = useState(3); // Number of matches to display at a time
  const [startIndex, setStartIndex] = useState(0); // Starting index of matches to display

  const handleNextMatches = () => {
    const newIndex = (startIndex + visibleMatches) % matchData.length;
    setStartIndex(newIndex);
  };

  const handlePrevMatches = () => {
    const newIndex = startIndex - visibleMatches;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    } else {
      setStartIndex(matchData.length - visibleMatches);
    }
  };

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
        setMatchData(matchData); // Set the state with the fetched match data
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextMatches();
    }, intervalMilliseconds || DEFAULT_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [startIndex, intervalMilliseconds, matchData]);

  const visibleMatchData = matchData.slice(
    startIndex,
    startIndex + visibleMatches
  );

  return (
    <div>
      <div>
        <button onClick={handlePrevMatches}>Previous</button>
        <button onClick={handleNextMatches}>Next</button>
      </div>
      {visibleMatchData.map((match: MatchData, index: number) => (
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
  );
}
