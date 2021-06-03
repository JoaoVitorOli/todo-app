import styled from "styled-components";

export const Container = styled.div`
  max-width: 650px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
  
  form {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.color.card};
    padding: 1rem;
    display: flex;
    align-items: center;
    border-radius: 6px;
  }
`;

export const InputText = styled.input`
  /* width: 300px; */
  flex: 1;
  font-size: 16px;
  height: 30px;
  background: transparent;
  border: 0;
  outline: none;
  color: ${(props) => props.theme.color.text};
  font-family: "Josefin Sans", sans-serif;
`;
