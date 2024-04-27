import React from "react";
import { useState } from "react";
import Football from "../Renders/Football";
import Basketball from "../Renders/Basketball";
import Volleyball from "../Renders/Volleyball";
import "../CSS/Teams.css";

const Teams = () => {
  const [render, setRender] = useState(<Football />);

  const setFB = () => {
    setRender(<Football />);
  };

  const setBB = () => {
    setRender(<Basketball />);
  };

  const setVB = () => {
    setRender(<Volleyball />);
  };

  return (
    <div>
      <h1>Sports</h1>
      <section className="sports">
        <div className="sportsbtn">
          <button onClick={setFB}>Football</button>
          <button onClick={setBB}>BasketBall</button>
          <button onClick={setVB}>Volleyball</button>
        </div>
        <div className="render">{render}</div>
      </section>
    </div>
  );
};

export default Teams;
