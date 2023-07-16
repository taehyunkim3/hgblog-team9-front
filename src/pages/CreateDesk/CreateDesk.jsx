import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { styled } from "styled-components";
import Desk1Svg from "../../components/Desks/Desk1Svg";
import { StCreateDesk } from "./CreateDeskStyle";

const CreateDesk = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <NavBar page="create" />
      <StCreateDesk>
        <Desk1Svg></Desk1Svg>
        <h1>Create your own desk</h1>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="이름" />
          <textarea type="text" placeholder="나의 책상 소개" />
          <input type="text" placeholder="프로필사진 url" />
          <input type="text" placeholder="책상사진 url" />
          <button type="submit">Create!</button>
        </form>
      </StCreateDesk>
    </>
  );
};

export default CreateDesk;
