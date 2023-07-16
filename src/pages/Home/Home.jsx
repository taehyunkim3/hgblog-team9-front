import React from "react";
import Desk1 from "../../components/Desks/Desk1";
import { initialState } from "../../db/deskDB";
import NavBar from "../../components/NavBar/NavBar";
import { StDeskWrapper, StDesksBox, StHome } from "./HomeStyle";
import { useQuery } from "@tanstack/react-query";
import { getDesks } from "../../services/api";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery(["desks"], getDesks);

  console.log(data);
  return (
    <StHome>
      <NavBar page="home" />
      <StDesksBox>
        {data &&
          data.map((desk) => {
            return (
              <StDeskWrapper key={desk.id}>
                <Desk1 name={desk.name} image={desk.profile} id={desk.deskId} />
              </StDeskWrapper>
            );
          })}
      </StDesksBox>
    </StHome>
  );
};

export default Home;
