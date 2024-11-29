const ListDisplayItem = ({ text, deadline }) => {
  let itemClassName = "list-group-item d-flex justify-content-between align-items-center"
  
  if(new Date(deadline).getDate() < new Date().getDate() - 1){
    itemClassName+= " overdue"
  }


  // Challenge: can you implement the delete functionality??
  // hint: you'll want to pass the setTodoItems function down to this component through props
  return (
    <li className={itemClassName}>
      <span className={"flex-grow-1"}>{text}</span>
      <span>{deadline}</span>
      <button className="btn btn-sm btn-outline-purple ms-4">Delete</button>
    </li>
  );
};

export default ListDisplayItem;