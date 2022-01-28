import { Box, Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { BellIcon, DeleteIcon } from "@chakra-ui/icons";

const Task = ({ task, toggleReminder, onDelete }) => {
  return (
    <Box
      boxShadow="2xl"
      borderWidth="2px"
      borderRadius="lg"
      p="6"
      rounded="md"
      bg="white"
      marginBottom="3"
    >
      <Flex>
        <Box>
          <Text fontSize="17px" fontWeight="medium">
            {task.text}
          </Text>
          <Text fontSize="10px">{task.date}</Text>
        </Box>
        <Spacer />
        <IconButton
          icon={<BellIcon />}
          color={task.reminder ? "blue.500" : "gray.500"}
          fontSize="lg"
          onClick={() => toggleReminder(task.id)}
        />
        <IconButton
          aria-label="Delete Task"
          icon={<DeleteIcon />}
          color="red.500"
          ml="2"
          onClick={() => onDelete(task.id)}
        />
      </Flex>
    </Box>
  );
};

export default Task;
