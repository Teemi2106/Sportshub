import React from "react";
import { useEffect, useState } from "react";
import fixtures from "../Database/fixtures.json";

const Fixtures = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTeams(fixtures.fixtures);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section>
        {teams.map((team, index) => (
          <div key={index} className="fixtures">
            <h2 className="teamName">{team.teams}</h2>
            <p className="teamName">{team.date}</p>
            <p className="teamName">{team.time}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Fixtures;
