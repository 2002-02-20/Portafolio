import React from "react";
import ProfilePic from "/derek.jpg";
import "./Presentacion.css";

const Presentacion = () => {
  return (
    <>
      <div className="segmentoPresentacion">
        <h1>
          Hi 👋, <br />
          My name is <br />
          Derek Moscui <br />
          I build things for web <br />
        </h1>
        <img src={ProfilePic} alt="Master Developer" className="picProfile" />
      </div>
    </>
  );
};

export default Presentacion;
