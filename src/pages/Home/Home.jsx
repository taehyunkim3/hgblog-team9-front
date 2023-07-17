import Desk1 from "../../components/Desks/Desk1";
import NavBar from "../../components/NavBar/NavBar";
import { StDeskWrapper, StDesksBox, StHome } from "./HomeStyle";
import { useQuery } from "@tanstack/react-query";
import { getDesks, getMyInfo } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../../redux/reducers/userInfo";

const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
  const {
    data: desks,
    isLoading,
    isError,
    error,
  } = useQuery(["desks"], getDesks, {
    staleTime: 60 * 1000, // 1분, default >> 0
    cacheTime: 60 * 5 * 1000, // 5분, default >> 5분
    refetchOnWindowFocus: false,
    retry: 0,
  });
  //

  const { isLoading: userLoading, isError: userError } = useQuery(
    ["user"],
    () => getMyInfo(token),
    {
      enabled: !!token,
      staleTime: 60 * 1000 * 20, // 20분, default >> 0
      onSuccess: (data) => {
        dispatch(userLogin(data));
      },
      onError: (error) => {
        console.log(error);

        if (error.message === "Token expired") {
          // 로컬스토리지 토큰 삭제
          localStorage.removeItem("token");
          // 로그인 페이지로 이동
          dispatch(userLogout());

          navigate("/login");
        } else {
          dispatch(userLogout());
        }
      },
      retry: (failureCount, error) => {
        return false;
      },
    }
  );
  //

  return (
    <StHome>
      <NavBar position="static" page="home" />
      <StDesksBox>
        {isError && <h1>An error has occurred: {error.message}</h1>}
        {isLoading && !isError && <h1>Loading...</h1>}
        {desks &&
          desks.map((desk) => {
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
