import { styled } from "styled-components";

export const StCreateDesk = styled.div`
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  form input,
  form textarea {
    width: 40rem;
    height: 4rem;
    border-radius: 1rem;
    border: 1px solid #e0e0e0;
    padding: 0.8rem;
    font-size: 1.5rem;
  }
  form textarea {
    height: 10rem;
  }
  form input::placeholder {
    padding: 0 1rem;
    font-size: 1rem;
  }
  form textarea::placeholder {
    padding: 1rem 1rem;
    font-size: 1rem;
  }
  form button {
    width: 20rem;
    height: 3rem;
    border-radius: 1rem;
    border: 1px solid #e0e0e0;
    background-color: #f6f5f7;
    font-size: 1.5rem;

    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: #fed84a;
    }
  }
`;
