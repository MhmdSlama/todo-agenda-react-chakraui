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
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import AddTask from "./AddTask";

const Header = ({ onAdd, theme }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box flexWrap="wrap">
      <Flex alignItems="center">
        <Text fontSize="30px" fontWeight="bold" 
        color={theme? "blue.500" : "white"}>
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
          <Button color={!isOpen ? theme ? "blue.400" : "white" : "red.400"}>{!isOpen ? "Add" : "Close"}</Button>
          <IconButton
            aria-label="Add Task"
            icon={!isOpen ? <AddIcon /> : <CloseIcon />}
            color={!isOpen ? theme ? "blue.400" : "white" : "red.400"}
          />
        </ButtonGroup>
      </Flex>
      <hr style={{marginTop: '10px', borderColor: 'rgba(66, 153, 225, 0.6)', borderWidth: "1px"}} />
      <AddTask isOpen={isOpen} onAdd={onAdd} theme={theme} />
    </Box>
  );
};

export default Header;
