import { styled } from "styled-components";
import backgroundImage from "../../lib/img/carpet.jpeg";
export const StDeskDetailBg = styled.div`
  //   background-image: url(${backgroundImage});
  //   background-repeat: repeat;
  height: 100vh;
  width: 100%;
  padding-bottom: 130px;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;

export const StDeskDetailBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;

  gap: 1rem;
  color: #ffffff;
  img {
    width: 80%;
    // box-shadow: 0px 0px 50px 9px #ffffff;
  }
  p {
    font-size: 2rem;
    margin: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .arrow {
    font-size: 4rem;
    margin-right: 3rem;
  }
  h2 {
    font-size: 1.4rem;
    white-space: nowrap;
  }
`;

export const StHoverShadow = styled.div`

  position: absolute;
  height: 100%;
  padding-bottom:130px;
  ${(prop) => (prop.position === "right" ? "right:0" : "left: 0")};
  max-width: 20rem;
  background: radial-gradient(ellipse farthest-corner at top ${(prop) =>
    prop.position === "right" ? "right" : "left"}, ${(prop) =>
  prop.position === "right"
    ? "rgba(30,0,0,0.5)"
    : "rgba(255,255,255,0.7)"} 0%, ${(prop) =>
  prop.position === "right" ? "rgba(0,0,0,0) " : "rgba(0,0,0,0) "} 70%);
  opacity:0;
  transition: all .5s;
  &:hover { 
    opacity:1;
    );
  }
  cursor:pointer;
`;
