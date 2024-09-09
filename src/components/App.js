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
  { listName: "Unit 1 Multiplication", listId: 1 },
  {
    id: 3457,
    question: "3 x 3",
    answer: "9",
  },
  {
    id: 7336,
    question: "6 x 6",
    answer: "36",
  },
  {
    id: 8832,
    question: "5 x 3",
    answer: "15",
  },
  {
    id: 1297,
    question: "8 x 4",
    answer: "32",
  },
  {
    id: 9103,
    question: "8 x 8",
    answer: "64",
  },
  {
    id: 2002,
    question: "3 x 4",
    answer: "12",
  },
  {
    id: 2003,
    question: "5 x 5",
    answer: "25",
  },
  {
    id: 2004,
    question: "9 x 9",
    answer: "81",
  },
  {
    id: 2005,
    question: "6 x 4",
    answer: "24",
  },
  {
    id: 2006,
    question: "3 x 5",
    answer: "15",
  },
  {
    id: 2007,
    question: "4 x 8",
    answer: "32",
  },
  {
    id: 2008,
    question: "4 x 3",
    answer: "12",
  },
  {
    id: 2009,
    question: "4 x 6",
    answer: "24",
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
