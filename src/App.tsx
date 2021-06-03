import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

import Header from "./components/Header";
import usePersistedState from './hooks/usePersistedState';

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import InputTodo from './components/InputTodo';
import ListTasks from "./components/ListTasks";

import { Global } from "./styles/Globals";
import { TasksProvider } from './context/TasksContext';

const Container = styled.div`
  width: 100%;

  main {
    position: relative;
    top: -150px;
  }
`;

const DragNDropToReorder = styled.span`
  color: ${(props) => props.theme.color.buttonTxtColor};
  margin: 1.75rem 0;
  justify-content: center;
  display: flex;
`;

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <TasksProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <Header toggleTheme={toggleTheme} />
          <main>
            <InputTodo />

            <ListTasks />

            <DragNDropToReorder>Drag and drop to reorder list</DragNDropToReorder>
          </main>
          <Global />
        </Container>
      </ThemeProvider>
    </TasksProvider>
  );
}

export default App;
