import React from "react";
import styles from "./Classification.module.css";

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

const ClassificationComponent: React.FC<{
  data: ClasificationProps[];
  group: string;
}> = ({ data, group }) => {
  if (!Array.isArray(data)) {
    return <div>Data is not available.</div>;
  }
  return (
    <div className={styles.outerContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.tableCaption}>{group}</p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.tableData}>
          <thead className={styles.tableHeader}>
            <tr>
              <th> </th>
              <th className={styles.teamTH}>Equipo</th>
              <th>JJ</th>
              <th>JG</th>
              <th>JE</th>
              <th>JP</th>
              <th>DIF</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.position}</td>
                <td>{item.nickName}</td>
                <td>{item.matchesPlayed}</td>
                <td>{item.matchesWon}</td>
                <td>{item.matchesTied}</td>
                <td>{item.lostMatches}</td>
                <td>{item.difference}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassificationComponent;
