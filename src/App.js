import Header from "./components/Header";
import {
  Center,
  Box,
  Text,
  IconButton,
  Image,
  useToast,
} from "@chakra-ui/react";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import noTask from "./assets/noTasks.png";
import beep from "./assets/beep.mp3";
import {
  getAllData,
  getData,
  updateData,
  deleteData,
  addData,
} from "./utils/fetchData";
import moment from "moment";

function App() {
  const toast = useToast();
  const [theme, setTheme] = useState(true);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getAllData();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      tasks.forEach((task) => {
        if (task.reminder) {
          if (task.date === moment().format("MMM Do yyyy [at] h:mma")) {
            var audio = new Audio(beep);
            audio.loop = true
            audio.play();
            toast({
              position: "top",
              title: task.text,
              description: task.date,
              status: "info",
              duration: 10000,
              isClosable: true,
              onCloseComplete: (() => audio.pause())
            });
          }
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  });

  const changeTheme = () => {
    setTheme(!theme);
    const body = document.getElementById("body");
    if (theme) {
      body.classList.replace("light", "dark");
    } else {
      body.classList.replace("dark", "light");
    }
  };

  const addTask = async (task) => {
    const data = await addData(task);
    setTasks([data, ...tasks]);
  };

  const toggleTaskReminder = async (id) => {
    const taskToToggle = await getData(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const data = await updateData(id, updatedTask);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await deleteData(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Box
        position="fixed"
        right={["10px", "10px", "30px"]}
        top={["15px", "15px", "20px"]}
        zIndex="1000"
      >
        <IconButton
          icon={theme ? <SunIcon /> : <MoonIcon />}
          color="yellow.500"
          bg={theme ? "blue.400" : "gray.800"}
          fontSize="2xl"
          onClick={changeTheme}
          boxShadow="outline"
          _hover={{}}
        />
      </Box>
      <Center marginTop={["70px", "70px", "50px"]} marginBottom="10px">
        <Box
          boxShadow="outline"
          p="6"
          rounded="md"
          bg={theme ? "white" : "gray.800"}
          w="500px"
        >
          <Header onAdd={addTask} theme={theme} />
          <Box m="3" marginTop="10">
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                toggleReminder={toggleTaskReminder}
                onDelete={deleteTask}
                theme={theme}
              />
            ) : (
              <Box
                display="flex"
                flexWrap="wrap"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  borderRadius="full"
                  boxSize="2xs"
                  src={noTask}
                  alt="No Tasks"
                  fit="cover"
                />
                <br />
                <Text
                  fontSize="17px"
                  fontWeight="bold"
                  color={theme ? "gray.600" : "white"}
                >
                  You don't have tasks
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default App;
