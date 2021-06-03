import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

import { Container } from "./styles";

interface Props {
  situation?: "neutral";
  idItem: string;
  isCompleted: boolean;
}

export default function CheckBox({ situation, idItem, isCompleted }: Props) {
  const {
    markCompleted
  } = useContext(TasksContext);

  return (
    <Container htmlFor={idItem} borderColor={situation} >
      <input
        id={idItem}
        type="checkbox"
        checked={isCompleted && true}
        disabled={situation && true}
        onChange={() => markCompleted(idItem)}
      />
      <span className="check" />
    </Container>
  );
}