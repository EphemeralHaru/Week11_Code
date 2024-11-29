import { useState } from "react";

const TodoForm = ({ setTodoItems }) => {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [dueDateValue, setDueDateValue] = useState("");
  const handleAddButtonClick = () => {
    setTodoItems((prevState) => {
      return [
        {
          id: `todoList${Math.random().toString(16).slice(2)}`,
          text: taskInputValue,
          deadline: dueDateValue,
        },
        ...prevState,
      ];
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="taskInput"
        className="form-control mb-1"
        placeholder="Add a new task..."
        onChange={(event) => {
          setTaskInputValue(event.target.value);
        }}
      />
      <div className="input-group mb-3">
        <span className="input-group-text">Due date </span>
        <input
          type="date"
          id="dueDate"
          className="form-control"
          onChange={(event) => {
            setDueDateValue(event.target.value);
          }}
        />
      </div>
      <div className="d-grid">
        <button
          id="addTaskButton"
          className="btn btn-purple"
          type="submit"
          onClick={handleAddButtonClick}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
