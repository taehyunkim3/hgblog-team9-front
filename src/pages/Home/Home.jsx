import React from "react";
import Desk1 from "../../components/Desks/Desk1";
import { initialState } from "../../db/deskDB";
import NavBar from "../../components/NavBar/NavBar";
import { StDeskWrapper, StDesksBox, StHome } from "./HomeStyle";

const Home = () => {
  return (
    <StHome>
      <NavBar page="home" />
      <StDesksBox>
        {initialState.map((desk) => {
          return (
            <StDeskWrapper key={desk.id}>
              <Desk1 name={desk.name} image={desk.image} id={desk.id} />
            </StDeskWrapper>
          );
        })}
      </StDesksBox>
    </StHome>
  );
};

export default Home;
