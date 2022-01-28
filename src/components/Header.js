import {
  Text,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddTask from "./AddTask";

const Header = ({onAdd}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box flexWrap="wrap">
      <Flex alignItems="center">
        <Text fontSize="30px" fontWeight="bold" color="blue.400">
          Task Tracker
        </Text>
        <Spacer />
        <ButtonGroup
          size="md"
          isAttached
          variant="outline"
          boxShadow="md"
          onClick={onToggle}
        >
          <Button color="blue.400">Add</Button>
          <IconButton
            aria-label="Add Task"
            icon={<AddIcon />}
            color="blue.400"
          />
        </ButtonGroup>
      </Flex>
      <AddTask isOpen={isOpen} onAdd={onAdd} />
    </Box>
  );
};

export default Header;
