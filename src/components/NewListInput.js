import { useState } from "react";
import StartOver from "./StartOver";

export default function NewListInput({
  onStartOver,
  combinedQuestions,
  setCombinedQuestions,
}) {
  const [flashcardSetName, setFlashcardSetName] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const handleInputChange = (event, index, field) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestions = [
      { listName: flashcardSetName }, // Add flashcardSetName as the first element
      ...questions.map((question, index) => ({
        // Use spread operator for clarity
        id: Math.floor(Math.random() * 10000), // Generate random ID
        question: question.question,
        answer: question.answer,
      })),
    ];

    setCombinedQuestions([...combinedQuestions, newQuestions]);
    onStartOver();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="flashcardSetName">Flashcard Set Name: </label>
        <input
          id="flashcardSetName"
          type="text"
          value={flashcardSetName}
          onChange={(event) => setFlashcardSetName(event.target.value)}
        />
        <h2>Create a New Set of Flashcards</h2>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={question.question}
                    onChange={(event) =>
                      handleInputChange(event, index, "question")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={question.answer}
                    onChange={(event) =>
                      handleInputChange(event, index, "answer")
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddQuestion}>Add Question</button>
        <button type="submit">Submit Cards</button>
      </form>
      <StartOver onStartOver={onStartOver} />
    </div>
  );
}
