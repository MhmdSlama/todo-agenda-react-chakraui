import Task from "./Task";

const Tasks = ({ tasks, toggleReminder, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleReminder={toggleReminder}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
