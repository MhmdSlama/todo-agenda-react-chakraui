import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  useToast,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import moment from "moment";

const AddTask = ({ isOpen, onAdd }) => {
  const toast = useToast();
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    var errors = [];
    const dateTime = moment(date).format("MMM Do [at] h:mma");
    if (text === "") errors.push("Enter task name");
    if (dateTime === "Invalid date") errors.push("Enter valid date");
    if (errors.length > 0){
      errors.map((error) => (
        toast({
          position: "top",
          title: error,
          status: "error",
          isClosable: true,
        })
      ))
      errors = []
      return
    }
    onAdd({ text, date: dateTime, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <>
      <Collapse in={isOpen} animateOpacity>
        <Box p="20px 40px" mt="4" bg="blue.100" rounded="md" shadow="md">
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input
                bg="white"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel htmlFor="Date">Date</FormLabel>
              <Input
                bg="white"
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
            <br />
            <Flex>
              <Checkbox
                isChecked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
              >
                Set Reminder
              </Checkbox>
              <Spacer />
              <Button type="submit" color="blue.400">
                Add
              </Button>
            </Flex>
          </form>
        </Box>
      </Collapse>
    </>
  );
};

export default AddTask;
