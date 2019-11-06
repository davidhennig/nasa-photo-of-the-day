import React from "react";

const NasaCard = props => {
  return (
    <div className="film-list">
      <h2>NASA PHOTO OF THE DAY 🚀</h2>
      <img src={props.hdurl} />
      <p>'change image'}</p>
      <div className="bottom">
        <p>Title: {props.title}</p>
        <p>Date: {props.date}</p>
        <p>explanation: {props.explanation}</p>
      </div>
    </div>
  );
};
export default NasaCard;
