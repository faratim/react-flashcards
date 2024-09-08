import "../styles.css";
import { FlashCards } from "./FlashCards";
import NewListInput from "./NewListInput";
import QuestionList from "./QuestionList";
import { useState } from "react";

export default function App() {
  const [questionList, setQuestionList] = useState([]);
  const [createNew, setCreateNew] = useState(false);

  function startOver() {
    setQuestionList([]);
    setCreateNew(false);
  }

  if (createNew) {
    return <NewListInput onStartOver={startOver} />;
  }

  return (
    <div className="App">
      {questionList.length === 0 ? (
        <QuestionList
          combinedQuestions={combinedQuestions}
          onQuestionList={setQuestionList}
          onCreateNew={setCreateNew}
        />
      ) : (
        <FlashCards questionList={questionList} onStartOver={startOver} />
      )}
    </div>
  );
}

export const questions1 = [
  { listName: "Question List #1", listId: 1 },
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export const questions2 = [
  { listName: "Question List #2", listId: 2 },
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export const questions3 = [
  { listName: "Question List #3", listId: 3 },
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export const combinedQuestions = [questions1, questions2, questions3];
