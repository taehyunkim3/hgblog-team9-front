import React, { useState } from "react";
import Desk1Svg from "./Desk1Svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const StDesk = styled.div`
  height: 13rem;
  width: 12rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: rgba(100, 100, 100, 0.7);
  }
`;
const StName = styled.div`
  width: 8.5rem;
  height: 2.4rem;

  margin-bottom: 0.7rem;
  margin-top: -1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const initialImage = "https://i.imgur.com/1QZzXQK.png";
const Desk1 = ({ id, image = initialImage, name = "noname" }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <StDesk
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        navigate(`/deskdetail/${id}`);
      }}
    >
      <Desk1Svg
        isHovered={isHover}
        width="10rem"
        height="10rem"
        IMAGEURL={image}
      />
      <StName>{name}'s desk</StName>
    </StDesk>
  );
};

export default Desk1;
