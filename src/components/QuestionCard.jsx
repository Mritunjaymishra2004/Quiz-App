export default function QuestionCard({ question, selected, onSelect }) {
  return (
    <div className="bg-white bg-opacity-90 p-4 rounded-2xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">{question.question}</h2>
      <div className="grid gap-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(option)}
            className={`p-3 rounded-xl text-base sm:text-lg border transition ${
              selected === option
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
