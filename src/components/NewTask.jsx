import React, { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    //k
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 rounded-sm px-1 py-1 hover:text-stone-950 hover:bg-stone-500"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
