import { useState } from "react";
import StartOver from "./StartOver";

export function FlashCards({ questionList, onStartOver }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <div className="flashcards">
        {questionList.slice(1).map((q) => (
          <div
            className={q.id === selectedId ? "selected" : ""}
            key={q.id}
            onClick={() => handleClick(q.id)}
          >
            {q.id === selectedId ? q.answer : q.question}
          </div>
        ))}
      </div>
      <div>
        <StartOver onStartOver={onStartOver} />
      </div>
    </>
  );
}
