import React from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Desk1Svg from "../../components/Desks/Desk1Svg";
const StRoom = styled.div`
  position: relative;
  min-height: 100vh;

  background-image: linear-gradient(to right, #434343 0%, black 100%);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .roomName {
    font-size: 4rem;
  }
`;

const FixedNavBar = styled(NavBar)`
  position: fixed;
  top: 0;
  width: 100%;
`;
const Room = () => {
  const { id } = useParams();
  return (
    <>
      <StRoom className="nav">
        <FixedNavBar page="room" />
        <Desk1Svg width="700px" height="700px" />
        <div className="roomName">id: {id} 의 방</div>
        <Link to={"/"}>홈으로 돌아가기</Link>
      </StRoom>
    </>
  );
};

export default Room;
