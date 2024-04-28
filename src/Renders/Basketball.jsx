import React from "react";
import teamsData from "../Database/bbteams.json";
import "../CSS/FB.css";
import { useState, useEffect } from "react";

const Basketball = () => {
  const [teams, setTeams] = useState([]);
  const [stats, setStats] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTeams(teamsData.teams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePlayerClick = (playerName) => {
    const player = teams
      .flatMap((team) => team.players)
      .find((player) => player.name === playerName);

    if (player) {
      const showcase = document.getElementById("showcase");
      showcase.innerHTML = `<h2>
      <br />${player.name}</h2>
      <p>Position: ${player.position || "None"}</p>
      <p>Points: ${player.points || "None"}</p>
      <p>Assists: ${player.assists || "None"}</p>
      <p>Rebounds: ${player.rebounds || "None"}</p>
      <p>Steals: ${player.steals || "None"}</p>
      <p>Blocks: ${player.Blocks || "None"}</p>
      <p>Field Goal Percentage: ${player.field_goal_percentage || "None"}</p>
      <p>Tree Point Percentage: ${player.three_point_percentage || "None"}</p>
      <p>Free  Percentage: ${player.free_throw_percentage || "None"}</p>
      <p className="overall">
      Overall: 
                  ${player.overall}
                </p>`;
    } else {
      console.error(`Player ${playerName} not found`);
    }
  };
  const handleShowFormation = (formationUrl) => {
    const formationSection = document.getElementById("formation");
    formationSection.innerHTML = `<img src=${formationUrl} alt="Team Formation" />`;
  };

  return (
    <div className="root">
      <h1>Basketball</h1>
      <h2>Teams / Players</h2>
      <section className="main">
        <div id="showcase">{stats}</div>
        <section id="teams">
          {teams.map((team, index) => (
            <div key={index} className="teamCard" id="teamCard">
              <h2
                className="teamName"
                onClick={() => handleShowFormation(team.formation)}
              >
                {team.team_name}
              </h2>

              {team.players.map((player, playerIndex) => (
                <div
                  key={playerIndex}
                  className="secondDiv"
                  onClick={() => handlePlayerClick(player.name)}
                >
                  <h4 className="playerName">{player.name}</h4>
                  <hr />
                </div>
              ))}
            </div>
          ))}
        </section>
      </section>
      <section id="formation">
        <h2>Formation</h2>
      </section>
    </div>
  );
};

export default Basketball;
