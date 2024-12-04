/*
I used the tool React,
which I learned how to use from a Udemy course by Angela Yu called "The Comeplete 2024 Web Development Bootcamp", specifically her module on React.
I learned that React is a JavaScript library used for building user interfaces, normally single page applications but can still render more than that.
It creates components that manage their own state and automatically updates the user interface when data changes.
Topics covered:
Constants & variables- `list` and `taskName` to store data.
Conditional logic- in the `handleDelete` function to filter tasks based on their ID.
Iteration- loop through tasks with the `map` method.
Functions- like `addTask` to manage actions by user.
Parameters- `id` in the `handleDelete` function.
Arrays- storing the tasks returned from the `addTask` function.
Individual elements- accessed in the array to display task title.
Methods- using `filter` to update the list when task is deleted.
*/

/* 
Importing useState from React to manage the state in my components (keeps track of tasks and input- data that changes)
*/
import { useState } from "react";
import "./app.css";

/*
main component of my app that holds all user interface
holds the array of tasks 
updates the list when adding/ deleting tasks 
holds the text the user types 
updates the name as the user types
*/
function Home() {
  const [list, setList] = useState([]);
  const [taskName, setTaskName] = useState("");


/* 
creates a new task and adds it to the list 
each task is an object with a unique id 
*/
  function addTask() {
    setList([...list, { id: Date.now(), title: taskName }]);
  }


/*
adds a new task when the ADD button is clicked 
clears the input box when typing 
*/
  function handleButton() {
    addTask();
    setTaskName("");
  }

/*
removes task from the list when DELETE button is clicked 
new array that keeps tasks that dont match the id of deleted one
update 
*/
  function handleDelete(id) {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
  }


/*
input
lets you type task name
updates taskName while typing
clicking ADD button calls `handleButton`

todo list 
loops through tasks in list 
displays title and delete button
when clicking DELETE it calls `handleDelete`
*/
  return (
    <>
      <div className="input-box">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        ></input>
        <button onClick={handleButton}>ADD</button>
      </div>

      <div className="todo-list">
        {list.map((task) => (
          <>
          <p>{task.title}</p>
          <button onClick={ () => handleDelete(task.id)}>DELETE</button>
          </>
        ))}
      </div>
    </>
  );
}


/*
needed in order to use main component in other files
*/
export default Home;
