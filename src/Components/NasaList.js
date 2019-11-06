import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=3H4GHsAKohvE6WzenqSGNmvko80QgNeDyD7Cejpj"
      )
      .then(response => {
        setPhoto(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="space">
      {
        <NasaCard
          date={photo.date}
          explanation={photo.explanation}
          hdurl={photo.hdurl}
          title={photo.title}
        />
      }
      )}
    </div>
  );
}
