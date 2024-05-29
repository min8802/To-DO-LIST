import { Button, Flex, Input } from "@chakra-ui/react"
import { FC } from "react"


const CreateTodo: FC = () => {
    return (
        <Flex bgColor="teal.200" h={32} justifyContent="center" alignItems="center" px={8} gap={4}>
            <Input />
            <Button colorScheme="blue">만들기</Button>
        </Flex>
    );
};

export default CreateTodo;