import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate, useParams } from "react-router-dom";

import { initialState as mockDB } from "../../db/deskDB";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import {
  StDeskDetailBg,
  StDeskDetailBody,
  StHoverShadow,
} from "./DeskDetailStyle";
import { getDeskDetail } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

const DeskDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery(["desks", id], () =>
    getDeskDetail(id)
  );

  const deskId = data && data.deskId;
  const name = data && data.name;
  const deskimg = data && data.deskimg;
  if (isLoading) return "Loading...";
  if (isError) return `An error has occurred: ${error.message}`;

  return (
    <StDeskDetailBg>
      <NavBar page="deskdetail" />
      <StDeskDetailBody>
        <StHoverShadow position={"left"} onClick={() => navigate(`/`)} />
        <AiOutlineArrowLeft className="arrow" />

        <h2>교실로</h2>
        <div>
          <p>?</p>
          <img src={deskimg}></img>
          <p>{name}</p>
        </div>
        <h2>{name}님의 방으로</h2>
        <AiOutlineArrowRight className="arrow" />
        <StHoverShadow
          position={"right"}
          onClick={() => navigate(`/deskdetail/${deskId}/room`)}
        />
      </StDeskDetailBody>
    </StDeskDetailBg>
  );
};

export default DeskDetail;
