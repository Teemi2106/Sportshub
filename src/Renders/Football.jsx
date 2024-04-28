import React, { useState, useEffect } from "react";
import teamsData from "../Database/fbteams.json";
import "../CSS/FB.css";

const Football = () => {
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
      <p>Goals: ${player.goals || "None"}</p>
      <p>Assists: ${player.assists || "None"}</p>
      <p>Speed: ${player.speed || "None"}</p>
      <p>Accuracy: ${player.accuracy || "None"}</p>
      <p>Strenght: ${player.strength || "None"}</p>
      <p className="overall">
      Overall: 
                  ${Math.floor(
                    (player.speed + player.accuracy + player.strength) / 3
                  )}
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
      <h1>Football</h1>
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

export default Football;
