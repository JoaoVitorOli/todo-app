import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => {
    if(props.theme.title === "dark") {
      return `url("/assets/bg-desktop-dark.jpg")`;
    }
    return `url("/assets/bg-desktop-light.jpg")`;
  }} no-repeat;
  background-size: cover;
  height: 300px;
  color: white;
`;

export const Wrapper = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  > div {
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;

    h1 {
      letter-spacing: 14px;
      font-size: 2.5rem;
    }

    button {
      background: transparent;
      border: 0;
      font-size: 0;
      cursor: pointer;
    }
  }
`;
