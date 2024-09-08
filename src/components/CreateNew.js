export default function CreateNew({ onCreateNew, onStartOver }) {
  return (
    <button id="create-new-button" onClick={() => onCreateNew(true)}>
      Create New Question List
    </button>
  );
}
