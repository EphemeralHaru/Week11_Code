import ListDisplayItem from "./ListDisplayItems";

// we will have an attribute "todoItems" for the items to
const ListDisplay = (props) => {
  const { todoItems } = props;
  // equal to "const todoItems = props.todoItems"

  // Creating an extra ListDisplayItem component is helpful
  // because if you want to localize the ui updates to a list item
  // and not the entire list, having an extra component
  // allows you to localize the "state"
  return (
    <ul id="taskList" className="list-group list-group-flush mt-4">
      {todoItems.map((todoItem) => (
        <ListDisplayItem
          key={todoItem.id}
          text={todoItem.text}
          deadline={todoItem.deadline}
        />
      ))}
    </ul>
  );
};

export default ListDisplay;
