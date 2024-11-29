// JavaScript to manage the to-do list
document
  .getElementById("addTaskButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("taskInput");
    const taskDueDate = document.getElementById("dueDate");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.className =
        "list-group-item d-flex justify-content-between align-items-center";

      // Create list item text span
      const listItemSpan = document.createElement("span");
      listItemSpan.textContent = taskText;
      listItemSpan.className = "flex-grow-1";

      // Create due date
      const dueDateSpan = document.createElement("span");
      if (taskDueDate.value) {
        dueDateSpan.textContent = taskDueDate.value;
        if (new Date(taskDueDate.value).getDate() < new Date().getDate() - 1) {
          listItem.className = `${listItem.className} overdue`;
        }
      }

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-sm btn-outline-purple ms-4";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });

      // Append delete button to list item and list item to list
      listItem.appendChild(listItemSpan);
      listItem.appendChild(dueDateSpan);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      // Clear the input
      taskInput.value = "";
    }
  });