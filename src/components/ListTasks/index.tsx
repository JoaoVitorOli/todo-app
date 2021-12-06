import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import CheckBox from '../CheckBox';

import { TasksContext } from '../../context/TasksContext';

import { 
  Container,
  Task,
  TaskName,
  Footer,
  Button,
  ButtonClearCompleted,
  MobileFooterButtons,
  Wrapper
} from "./styles";
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface taskProps {
  id: string,
  name: string,
  completed: boolean;
}

export default function ListTasks() {
  const [filteredTasks, setFilteredTasks] = useState<taskProps[]>([]);

  const {
    tasks,
    excludeTask,
    handleOnDragEnd,
    getButtonSelected,
    clearCompleted,
    tasksFiltered,
    tasksLeft,
    buttonSelected
  } = useContext(TasksContext);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (filteredTasks.length === 0) {
      return setFilteredTasks(tasks);
    } else {
      return setFilteredTasks(tasksFiltered);
    }
  }, [tasks, tasksFiltered]);

  return (
    <>
      <Wrapper>
        <Container>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="tasks" data-test="droppable">
              {(provided) => (
                filteredTasks && (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {filteredTasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Task {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <CheckBox idItem={task.id} isCompleted={task.completed}/>
                            <TaskName isCompleted={task.completed}>{task.name}</TaskName>
                            <button type="button" onClick={() => excludeTask(task.id)}>
                              <img src="/assets/icon-cross.svg" alt="icon cross"/>
                            </button>
                          </Task>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )
              )}
            </Droppable>
          </DragDropContext>
          
          <Footer>
            <p>{tasksLeft} items left</p>
            
            {width > 768 && (
              <div>
                <Button
                  onClick={(e) => getButtonSelected(e.currentTarget.name)}
                  name="all"
                  isSelected={buttonSelected === "all" ? true : false }
                >All</Button>
                <Button
                  onClick={(e) => getButtonSelected(e.currentTarget.name)}
                  name="active"
                  isSelected={buttonSelected === "active" ? true : false }
                >Active</Button>
                <Button
                  onClick={(e) => getButtonSelected(e.currentTarget.name)}
                  name="completed"
                  isSelected={buttonSelected === "completed" ? true : false }
                >Completed</Button>
              </div>
            )}

            <ButtonClearCompleted onClick={clearCompleted}>Clear Completed</ButtonClearCompleted>
          </Footer>
        </Container>

        {width <= 768 && (
          <MobileFooterButtons>
            <Button
              onClick={(e) => getButtonSelected(e.currentTarget.name)}
                  name="all"
                  isSelected={buttonSelected === "all" ? true : false }
            >All</Button>
            <Button
              onClick={(e) => getButtonSelected(e.currentTarget.name)}
                  name="active"
                  isSelected={buttonSelected === "active" ? true : false }
            >Active</Button>
            <Button
              onClick={(e) => getButtonSelected(e.currentTarget.name)}
                  name="completed"
                  isSelected={buttonSelected === "completed" ? true : false }
            >Completed</Button>
          </MobileFooterButtons>
        )}
      </Wrapper>

    </>
  );
}