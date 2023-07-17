import NavBar from "../../components/NavBar/NavBar";

import Desk1Svg from "../../components/Desks/Desk1Svg";
import { StCreateDesk, AutoUrl } from "../CreateDesk/CreateDeskStyle";
import { useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { postLogIn } from "../../services/api";
import { useNavigate } from "react-router-dom";

const initialInput = {
  userId: "",
  userPassword: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const [isNoId, setNoIsId] = useState(false);
  const [isNoPassword, setIsNoPassword] = useState(false);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const mutation = useMutation({
    mutationFn: postLogIn,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      console.log(data);
      localStorage.setItem("token", data.token);
      // navigate("/");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setIsNoPassword(false);
    setNoIsId(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.id && input.password) {
      mutation.mutate(input);
      setInput(initialInput);
      setIsNoPassword(false);
      setNoIsId(false);
    }
    if (!input.id) {
      setNoIsId(true);
    }
    if (!input.password) {
      setIsNoPassword(true);
    }
  };

  const onJoinHandler = (e) => {
    navigate("/register");
  };

  return (
    <>
      <NavBar page="create" />
      <StCreateDesk>
        <Desk1Svg></Desk1Svg>

        <h1>로그인</h1>

        <form onSubmit={onSubmitHandler}>
          {isNoId && <p>아이디를 입력하세요</p>}
          <input
            type="text"
            name="userId"
            value={input.userId}
            onChange={onChangeHandler}
            placeholder="id"
          />
          {isNoPassword && <p>비밀번호를 입력하세요</p>}
          <input
            type="password"
            name="userPassword"
            value={input.userPassword}
            onChange={onChangeHandler}
            placeholder="password"
          />

          <button type="submit">로그인</button>
          <button
            type="button"
            onClick={() => {
              onJoinHandler();
            }}
          >
            회원가입
          </button>
        </form>
      </StCreateDesk>
    </>
  );
};

export default Login;
