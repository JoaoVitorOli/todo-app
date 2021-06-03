import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Wrapper } from "./styles";

interface Props {
  toggleTheme: () => void;
}

export default function Header({ toggleTheme }: Props) {
  const { title } = useTheme();

  return (
    <Container>
      <Wrapper>
        <div>
          <h1>TODO</h1>
          <button type="button" onClick={toggleTheme}>
            <img src={`/assets/${title === "dark" ? "icon-sun.svg" : "icon-moon.svg"}`} alt="icon theme"/>
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}