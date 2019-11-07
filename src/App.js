import React from "react";
import "./App.css";
import NasaList from "./Components/NasaList";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const WrapperDiv = styled.div`
  font-size: 30px;
  img {
    width: 45%;
    margin-bottom: 50px;
    border-radius: 100px;
  }
  .bottom {
    margin: auto;
    width: 80%;
  }
  h1 {
    font-size: 100px;
    padding: 20px;
  }
  h2 {
    padding-bottom: 50px;
  }
`;

function App() {
  return (
    <WrapperDiv>
      <div className="App">
        {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
        <NasaList />
      </div>
    </WrapperDiv>
  );
}

export default App;
