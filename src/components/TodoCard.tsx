import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";


const TodoCard: FC = () => {
    return (
        <Flex gap={4} bgColor="white" px={4} py={2} fontSize={20}>
            <Text fontSize={20} bgColor="" w={48} isTruncated={true}>
             🏃‍♀️달리기
            </Text>
            <Button>
                <FaRegEdit />
            </Button>
            <Button>
                <FaTrashCanArrowUp />
            </Button>
        </Flex>
    );
};

export default TodoCard;