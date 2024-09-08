import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show error message
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Oops...looks like you forgot to enter a value</p>
        <p>Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
