import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FiX } from "react-icons/fi";

interface TodoCardProps {
    todo: ITodo
    todos: ITodo[];
    setTodos: Dispatch<SetStateAction<ITodo[]>>
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
    const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
    const [content, setContent] = useState<string>(todo.content);

    const onClickIsDone = () => {
        const temp = todos.map((v) => {
            if (v.id === todo.id) {
                return {id: todo.id, content: todo.content, isDone: !todo.isDone}
            } else {
                return v;
            }
        });

        setTodos(temp);
    };

    const onClickUpdate = () => {
        if (!content) return;
    
        const temp = todos.map((v) => {
          if (v.id === todo.id) {
            return { id: todo.id, content, isDone: todo.isDone };
          } else {
            return v;
          }
        });
    
        setTodos(temp);
        setIsUpdateOpen(false);
    };

    const onClickDelete = () => {
        const temp = todos.filter((v) => {
            if(v.id !== todo.id ) {
                return v;
            }
        })
        setTodos(temp);
    }
    
    useEffect(() => {console.log(content)}, [content])

    return (
        <Flex gap={4} bgColor="white" px={4} py={2} fontSize={20}>
            {isUpdateOpen ? (
        <Flex>
          <Input value={content} onChange={(e) => {setContent(e.target.value)}} />
          <Button onClick={onClickUpdate}>수정</Button>
        </Flex>
        ) : (
        <Text
          fontSize={20}
          w={48}
          isTruncated={true}
          textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
          onClick={onClickIsDone}
        >
          {todo.content}
        </Text>
        )}
            <Button onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
                {isUpdateOpen? <FiX /> : <FaRegEdit />}
            </Button>
            <Button onClick={onClickDelete}>
                <FaTrashCanArrowUp />
            </Button>
        </Flex>
    );
};

export default TodoCard;