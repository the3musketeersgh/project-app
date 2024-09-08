import React from "react";

function NewTask() {
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 rounded-sm px-1 py-1 hover:text-stone-950 hover:bg-stone-500">
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
