export default function ListCard({ name, questions, onQuestionList }) {
  return (
    <div
      className="question-list-card"
      onClick={() => onQuestionList(questions)}
    >
      <span>{name}</span>
    </div>
  );
}
