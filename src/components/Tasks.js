import { Box } from "@chakra-ui/react";
import Task from "./Task";

const Tasks = ({ tasks, toggleReminder, onDelete, theme }) => {
  return (
    <Box
      maxH={["350", "350", "370"]}
      overflowY="auto"
      pr="10px"
      borderRadius="lg"
    >
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleReminder={toggleReminder}
          onDelete={onDelete}
          theme={theme}
        />
      ))}
    </Box>
  );
};

export default Tasks;
