import Header from "./components/Header";
import { Center, Box, Text } from "@chakra-ui/react";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      date: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      date: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      date: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = tasks.length + 1;
    setTasks([...tasks, { id, ...task }]);
  };

  const toggleTaskReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Center marginTop="50px">
      <Box boxShadow="outline" p="6" rounded="md" bg="white" w="500px">
        <Header onAdd={addTask} />
        <Box m="3" marginTop="10">
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              toggleReminder={toggleTaskReminder}
              onDelete={deleteTask}
            />
          ) : (
            <Text fontSize="17px" fontWeight="medium">
              You have no tasks
            </Text>
          )}
        </Box>
      </Box>
    </Center>
  );
}

export default App;
