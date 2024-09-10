import CreateNew from "./CreateNew";
import ListCard from "./ListCard";

export default function QuestionList({
  combinedQuestions,
  onQuestionList,
  onCreateNew,
  onStartOver,
}) {
  return (
    <>
      <div>
        <h1>Select a Flashcard Set or Create New</h1>
      </div>

      <div>
        <CreateNew
          onCreateNew={onCreateNew}
          combinedQuestions={combinedQuestions}
          onStartOver={onStartOver}
        />
      </div>

      <div className="flashcards">
        {combinedQuestions.map((qarray) => (
          <ListCard
            name={qarray[0].listName}
            key={qarray[0].listId}
            questions={qarray}
            onQuestionList={onQuestionList}
          />
        ))}
      </div>
    </>
  );
}
