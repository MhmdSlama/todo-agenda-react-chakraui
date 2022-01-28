import { Box } from "@chakra-ui/react";
import Task from "./Task";

const Tasks = ({ tasks, toggleReminder, onDelete }) => {
  return (
    <Box maxH="400" overflowY="auto">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleReminder={toggleReminder}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
};

export default Tasks;
