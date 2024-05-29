import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";


const sampleData: ITodo[] = [
  {
      id: 1,
      content: "귀칼 보기",
      isDone: true,
  },
  {
      id: 2,
      content: "주술회전 보기",
      isDone: true,
  },
  {
      id: 3,
      content: "스파이패밀리 보기",
      isDone: true,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);
  

  return <Flex flexDir="column" minH="100vh">
    <CreateTodo todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
  </Flex>;
};

export default App;