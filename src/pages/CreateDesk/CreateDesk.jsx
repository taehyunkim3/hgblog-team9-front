import NavBar from "../../components/NavBar/NavBar";

import Desk1Svg from "../../components/Desks/Desk1Svg";
import { StCreateDesk } from "./CreateDeskStyle";
import { useState } from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getDesks, postDesk } from "../../services/api";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const initialInput = {
  deskId: nanoid(5),
  name: "",
  description: "",
  profile: "",
  deskimg: "",
};
const CreateDesk = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);

  const queryClient = new QueryClient();

  const mutation = useMutation({
    mutationFn: postDesk,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["desks"] });
      navigate("/");
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
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(input);
    setInput(initialInput);
  };

  return (
    <>
      <NavBar page="create" />
      <StCreateDesk>
        <Desk1Svg></Desk1Svg>
        <h1>Create your own desk</h1>
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
            name="deskimg"
            value={input.deskimg}
            onChange={onChangeHandler}
            placeholder="책상사진 url"
          />
          <button type="submit">Create!</button>
        </form>
      </StCreateDesk>
    </>
  );
};

export default CreateDesk;
