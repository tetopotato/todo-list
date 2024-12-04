/*

*/

import { useState } from "react";
import "./app.css";

function Home() {
  const [list, setList] = useState([]);
  const [taskName, setTaskName] = useState("");

  function addTask() {
    setList([...list, { id: Date.now(), title: taskName }]);
  }

  function handleButton() {
    addTask();
    setTaskName("");
  }

  function handleDelete(id) {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
  }

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

export default Home;
