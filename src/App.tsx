import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";


const sampleData: ITodo[] = [
  {
      id: 1,
      content: "점심 요리",
      isDone: false,
  },
  {
      id: 2,
      content: "설거지",
      isDone: false,
  },
  {
      id: 3,
      content: "코딩",
      isDone: false,
  },
  {
      id: 4,
      content: "저녁 요리",
      isDone: false,
  },
  {
      id: 5,
      content: "설거지",
      isDone: false,
  },
  {
      id: 6,
      content: "코딩",
      isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);
  

  return <Flex flexDir="column" minH="100vh">
    <CreateTodo todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos}/>
  </Flex>;
};

export default App;