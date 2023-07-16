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

const DeskDetail = () => {
  const { id } = useParams();
  console.log(id);
  const data = mockDB.find((data) => data.id === Number(id));
  console.log(data);
  const navigate = useNavigate();

  return (
    <StDeskDetailBg>
      <NavBar page="deskdetail" />
      <StDeskDetailBody>
        <StHoverShadow position={"left"} onClick={() => navigate(`/`)} />
        <AiOutlineArrowLeft className="arrow" />

        <h2>교실로</h2>
        <div>
          <p>?</p>
          <img src={data.image}></img>
          <p>{data.name}</p>
        </div>
        <h2>{data.name}님의 방으로</h2>
        <AiOutlineArrowRight className="arrow" />
        <StHoverShadow
          position={"right"}
          onClick={() => navigate(`/deskdetail/${id}/room`)}
        />
      </StDeskDetailBody>
    </StDeskDetailBg>
  );
};

export default DeskDetail;
