import 
  React,
  { 
    createContext,
    useEffect,
    useState
  } from "react";
import { v4 as uuidv4 } from 'uuid';

interface TasksContextProps {
  addNewTask: (task: string) => void;
  excludeTask: (id: string) => void;
  markCompleted: (id: string) => void;
  handleOnDragEnd: (result: any) => void;
  setActiveTasksLeft: () => void;
  setCompletedTasks: () => void;
  getButtonSelected: (name: string) => void;
  clearCompleted: () => void;
  buttonSelected: string,
  tasksFiltered: taskProps[];
  tasks: taskProps[];
  tasksLeft: number;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

interface taskProps {
  id: string,
  name: string,
  completed: boolean;
}

export const TasksContext = createContext({} as TasksContextProps);

export function TasksProvider({ children }: TaskProviderProps) {
  const [tasksLeft, setTasksLeft] = useState(0);
  const [buttonSelected, setButtonSelected] = useState("all");
  const [tasksFiltered, setTasksFiltered] = useState<taskProps[]>([]);
  const [tasks, setTasks] = useState<taskProps[]>(() => {
    const tasksFromLocalStorage = localStorage.getItem("todoApp@FrontendMentor");

    if (tasksFromLocalStorage) {
      return JSON.parse(tasksFromLocalStorage);
    }

    return [];
  });

  useEffect(() => {
    toggleTasksLeft(buttonSelected);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoApp@FrontendMentor", JSON.stringify(tasks));
    toggleTasksLeft(buttonSelected);
    
    handleFilter();
  }, [tasks, buttonSelected]);

  function handleFilter() {
    switch (buttonSelected) {
      case "active":
        return setTasksFiltered(tasks.filter((tasks) => !tasks.completed));

      case "completed":
        return setTasksFiltered(tasks.filter((tasks) => tasks.completed));

      default:
        return setTasksFiltered(tasks);
    }
  };

  function getButtonSelected(name: string) {
    setButtonSelected(name);
  }

  function toggleTasksLeft(name: string) {
    if (name === "all") {
      setTasksLeft(tasks.length);
    }

    if (name === "active") {
      const result = tasks.filter(value => value.completed === false);
      const lengthResult = result.length;

      setTasksLeft(lengthResult);
    }

    if (name === "completed") {
      const result = tasks.filter(value => value.completed === true);
      const lengthResult = result.length;

      setTasksLeft(lengthResult);
    }
  }

  function setActiveTasksLeft() {
    const result = tasks.filter(value => value.completed === false);
    const lengthResult = result.length;

    setTasksLeft(lengthResult);
    setTasksFiltered(result);
  }

  function setCompletedTasks() {
    const result = tasks.filter(value => value.completed === true);
    const lengthResult = result.length;

    setTasksLeft(lengthResult);
    setTasksFiltered(result);
  }

  function clearCompleted() {
    setTasks(tasks.filter(value => value.completed !== true));
  }

  function addNewTask(task: string) {
    const newTask = {
      id: uuidv4(),
      name: task,
      completed: false,
    }

    console.log(newTask);

    if (!tasks) {
      console.log("tasks vazias, adicioando uma.");
      setTasks([newTask]);

      return;
    }

    setTasks([...tasks, newTask]);
  }

  function excludeTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function markCompleted(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    );
  }

  function handleOnDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }

  return (
    <TasksContext.Provider value={{
      addNewTask,
      excludeTask,
      markCompleted,
      handleOnDragEnd,
      setActiveTasksLeft,
      setCompletedTasks,
      getButtonSelected,
      clearCompleted,
      buttonSelected,
      tasksFiltered,
      tasks,
      tasksLeft
    }}>
      {children}
    </TasksContext.Provider>
  );
}