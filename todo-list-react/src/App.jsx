import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import ListDisplay from "./components/ListDisplay";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Your Tasks</h2>
        <TodoForm  setTodoItems={setTodoItems} />
        <ListDisplay todoItems={todoItems} />
      </div>
    </div>
  );
}

export default App;
