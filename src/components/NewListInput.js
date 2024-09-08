import { useState } from "react";
import StartOver from "./StartOver";

export default function NewListInput({
  onNewList,
  combinedQuestions,
  onStartOver,
}) {
  const [listName, setListName] = useState("");

  function handleChange(e) {
    setListName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onNewList(listName);
    setListName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new list name"
          value={listName}
          onChange={handleChange}
        />
        <button type="submit">Create New List</button>
      </form>

      <StartOver onStartOver={onStartOver} />
    </>
  );
}
