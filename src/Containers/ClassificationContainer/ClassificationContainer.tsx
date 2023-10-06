import React, { useEffect, useState } from "react";
import TableComponent from "@/Components/ClassificationComponent/ClassificationComponent"; // Adjust the import path as needed
import { API_URL, bearerToken } from "@/constants";

interface ClasificationProps {
  position: number;
  nickName: string;
  matchesPlayed: number;
  matchesWon: number;
  matchesTied: number;
  lostMatches: number;
  difference: number;
  points: number;
}

interface DataProps {
  show: number;
  seasonUUID: string;
}

export default function ClassificationContainer(DataProps: DataProps) {
  const [data, setData] = useState<ClasificationProps[]>([]);
  const [group, setGroup] = useState<string>(""); // [1
  useEffect(() => {
    const apiUrl = `${API_URL}/temp/stats/general/${DataProps.seasonUUID}
    `;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const teamList = data.data[DataProps.show].teamList;
        
        const classificationData = teamList.map((team: any) => {
          return {
            position: team.position,
            nickName: team.nickName,
            matchesPlayed: team.matchesPlayed,
            matchesWon: team.matchesWon,
            matchesTied: team.matchesTied,
            lostMatches: team.lostMatches,
            difference: team.difference,
            points: team.score,
          };
        });

        const group = data.data[DataProps.show].nameEs;
        console.log("group", group);
        setGroup(group);

        setData(classificationData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <TableComponent data={data} group={group} />{" "}
    </div>
  );
}
