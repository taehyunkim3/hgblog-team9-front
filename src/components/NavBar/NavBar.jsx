import React from "react";
import { styled } from "styled-components";
import DeskPostSelector from "./DeskPostSelector";
import { CgProfile } from "react-icons/cg";
import { TbDeviceDesktopPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const StNavBar = styled.div`
  height: 6rem;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border-bottom: 1px solid #e0e0e0;
  top: 0;

  background-color: #f6f5f7;
  opacity: 0.7;
  .profile {
    font-size: 2rem;
    cursor: pointer;
    margin-right: 0;
  }
  .addTable {
    font-size: 2rem;
    cursor: pointer;
    margin-left: auto;
    margin-right: 0;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: red;
    cursor: pointer;
  }
`;
const NavBar = ({ page = "home" }) => {
  const navigate = useNavigate();
  const onProfileClickHandler = () => {
    alert("프로필 페이지로 이동합니다. 아직 구현되지 않았습니다.");
  };
  return (
    <StNavBar>
      <h1 onClick={() => navigate("/")}>항구LOG</h1>
      <p>99일 우리들의 항해 기록</p>

      {page === "home" && <DeskPostSelector />}
      {page === "home" && (
        <TbDeviceDesktopPlus
          className="addTable"
          onClick={() => navigate("/createdesk")}
        />
      )}
      {page === "deskdetail" && <p>deskDetailNav</p>}

      <CgProfile className="profile" onClick={onProfileClickHandler} />
    </StNavBar>
  );
};

export default NavBar;
