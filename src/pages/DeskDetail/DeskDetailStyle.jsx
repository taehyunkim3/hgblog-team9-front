import { styled } from "styled-components";
import backgroundImage from "../../lib/img/carpet.jpeg";
export const StDeskDetailBg = styled.div`
  //   background-image: url(${backgroundImage});
  //   background-repeat: repeat;
  height: 100vh;
  width: 100%;
  padding-bottom: 130px;
  // background-image: linear-gradient(to right, #434343 0%, black 100%);
  background: rgb(67, 67, 67);
  background: radial-gradient(
    circle,
    rgba(67, 67, 67, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
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
    max-width: 40vw;
    max-height: 70vh;
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
    width: 20%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
    ? "rgba(90,90,90,0.5)"
    : "rgba(140,140,140,0.3)"} 0%, ${(prop) =>
  prop.position === "right" ? "rgba(0,0,0,0) " : "rgba(0,0,0,0) "} 60%);
  opacity:0;
  transition: all .5s;
  &:hover { 
    opacity:1;
    );
  }
  cursor:pointer;
`;
