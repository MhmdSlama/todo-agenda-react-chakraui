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
} from "@chakra-ui/react";
import { useState } from "react";

const AddTask = ({ isOpen, onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, date, reminder });
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
