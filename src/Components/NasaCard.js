import React from "react";

const NasaCard = props => {
  return (
    <div className="film-list">
      <h1>NASA PHOTO OF THE DAY 🚀</h1>
      <img src={props.hdurl} />
      <div className="bottom">
        <h2>Title: {props.title}</h2>
        <h3>Date: {props.date}</h3>
        <p>{props.explanation}</p>
      </div>
    </div>
  );
};
export default NasaCard;
