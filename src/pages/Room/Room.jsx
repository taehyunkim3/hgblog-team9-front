import React from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Desk1Svg from "../../components/Desks/Desk1Svg";
const StRoom = styled.div`
  position: relative;
  min-height: 100vh;

  background: rgb(67, 67, 67);
  background: radial-gradient(
    circle,
    rgba(67, 67, 67, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .roomName {
    font-size: 4rem;
  }
`;
const StRoomBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100%;
  gap: 1rem;
  color: #ffffff;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
    .profileBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-width: 18rem;
      min-height: 18rem;
      height: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
    }

    .categoryBox {
      min-width: 13rem;
      min-height: 18rem;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
    }
  }
  .contents {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
  }
`;

const Room = () => {
  const { id } = useParams();
  return (
    <>
      <StRoom className="nav">
        <NavBar position="fixed" page="room" />
        <Link to={"/"}>홈으로 돌아가기</Link>
        <StRoomBody>
          <div className="left">
            <div className="profileBox">
              <div className="profileText">
                <p>이름: 홍길동</p>
                <p>주특기: Spring</p>
                <p>기수: 15기</p>
                <p>나의 한줄 소개: 안녕하세요</p>
              </div>
              <Desk1Svg className="svg" width="12rem" height="12rem" />
            </div>
            <div className="categoryBox">category</div>
          </div>

          <div className="contents">contents</div>
        </StRoomBody>
      </StRoom>
      dfd <Desk1Svg width="700px" height="700px" />
      <div className="roomName">id: {id} 의 방</div>
    </>
  );
};

export default Room;
