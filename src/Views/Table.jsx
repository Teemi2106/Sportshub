import React from "react";
import teams from "../Database/table.json";
import { useEffect, useState } from "react";
import "../CSS/Table.css";

const Table = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortedTeams = teams.teams.sort(
          (a, b) => b.wins * 3 + b.draws * 1 - (a.wins * 3 + a.draws * 1)
        );
        setTable(sortedTeams);
        console.log(sortedTeams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="lg">League Table</h1>
      <table id="league-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Goals Scored</th>
            <th>Goals Conceded</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th className="points">Points</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row.team_name}>
              <td>{row.team_name}</td>
              <td>{row.goals_scored}</td>
              <td>{row.goals_conceded}</td>
              <td>{row.wins}</td>
              <td>{row.draws}</td>
              <td>{row.losses}</td>
              <td className="points">
                {row.points !== null ? row.points : "Points"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
