import NavBar from "../../components/NavBar/NavBar";

import Desk1Svg from "../../components/Desks/Desk1Svg";
import { StCreateDesk, AutoUrl } from "./CreateDeskStyle";
import { useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getDesks, postDesk } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const initialInput = {
  name: "",
  description: "",
  profile: "",
  deskImg: "",
};
const CreateDesk = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);
  const [autoUrlEnabled, setAutoUrlEnabled] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  console.log(params.deskId);
  const { data: desk } = useQuery(["desks"], getDesks, {
    enabled: !!params.deskId,
    staleTime: 60 * 1000 * 30, // 30분, default >> 0
    cacheTime: 60 * 30 * 1000, // 30분, default >> 5분
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const mutation = useMutation({
    mutationFn: postDesk,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["desks"] });
      navigate("/");
    },
    onError: (error) => {
      isAlert(error);
    },
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setIsAlert(false);
  };

  const onAutoUrlChange = (e) => {
    setAutoUrlEnabled(e.target.checked);
    if (e.target.checked) {
      setInput({
        ...input,
        profile: "https://source.unsplash.com/random",
        deskImg: "https://source.unsplash.com/random",
      });
    } else {
      setInput({
        ...input,
        profile: "",
        deskImg: "",
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.name && input.description && input.profile && input.deskImg) {
      mutation.mutate(input);
      setInput(initialInput);
      setIsAlert(false);
    } else {
      setIsAlert(true);
    }
  };

  return (
    <>
      <NavBar page="create" />
      <StCreateDesk>
        <Desk1Svg></Desk1Svg>

        {isAlert ? (
          <h1>모든 항목을 입력해주세요.</h1>
        ) : (
          <h1>Create your own desk</h1>
        )}

        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={onChangeHandler}
            placeholder="이름"
          />
          <textarea
            type="text"
            name="description"
            value={input.description}
            onChange={onChangeHandler}
            placeholder="나의 책상 소개"
          />

          <input
            type="text"
            name="profile"
            value={input.profile}
            onChange={onChangeHandler}
            placeholder="프로필사진 url"
          />
          <input
            type="text"
            name="deskImg"
            value={input.deskImg}
            onChange={onChangeHandler}
            placeholder="책상사진 url"
          />

          <button type="submit">
            {" "}
            {isAlert ? " 모든 항목을 입력해주세요." : "Create!"}
          </button>
        </form>
        <AutoUrl>
          <label htmlFor="autoUrl">자동으로 이미지 생성하기</label>
          <input
            name="autoUrl"
            id="autoUrl"
            type="checkbox"
            checked={autoUrlEnabled}
            onChange={onAutoUrlChange}
          />
        </AutoUrl>
      </StCreateDesk>
    </>
  );
};

export default CreateDesk;
