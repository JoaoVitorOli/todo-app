import React, { useContext, useState } from 'react';
import { TasksContext } from '../../context/TasksContext';

import CheckBox from "../CheckBox";

import { Container, Wrapper, InputText } from "./styles";

export default function InputTodo() {
  const [taskName, setTaskName] = useState("");

  const {
    addNewTask
  } = useContext(TasksContext);

  function handleAddNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!taskName) {
      return;
    }

    console.log(taskName);
    addNewTask(taskName);
    setTaskName("");
  }

  return (
    <Container>
      <Wrapper>
        <form onSubmit={(e) => handleAddNewTask(e)}>
          <CheckBox isCompleted={false} situation="neutral" idItem="neutral"/>
          <InputText
            type="text"
            placeholder="Create a new todo..."
            value={taskName}
            data-test="todo-input"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </form>
      </Wrapper>
    </Container>
  );
}