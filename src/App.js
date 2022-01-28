import Header from "./components/Header";
import { Center, Box, Text } from "@chakra-ui/react";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  const toggleTaskReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
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
