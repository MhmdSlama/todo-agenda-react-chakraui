import { Box, Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { BellIcon, DeleteIcon } from "@chakra-ui/icons";

const Task = ({ task, toggleReminder, onDelete, theme }) => {
  return (
    <Box
      boxShadow="2xl"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="blue.400"
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
          <Text fontSize="12px">{task.date}</Text>
        </Box>
        <Spacer />
        <IconButton
          icon={<BellIcon />}
          color={task.reminder ? theme ? "blue.800" : "blue.700" : theme ? "gray.400" : "gray.400"}
          fontSize="xl"
          bg={theme ? "gray.100" : "gray.200"}
          borderWidth="1px"
          borderColor="blue.400"
          onClick={() => toggleReminder(task.id)}
        />
        <IconButton
          aria-label="Delete Task"
          icon={<DeleteIcon />}
          color="red.600"
          ml="2"
          bg={theme ? "gray.100" : "gray.200"}
          borderWidth="1px"
          borderColor="blue.400"
          onClick={() => onDelete(task.id)}
        />
      </Flex>
    </Box>
  );
};

export default Task;
