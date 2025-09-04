import ResultCard from "../components/ResultCard";

export default function Results({ result, onDashboard }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen w-full flex items-center justify-center">
        <div className="space-y-6 w-full max-w-4xl">
          <ResultCard
            score={result.score}
            total={result.total}
            answers={result.answers}
            questions={result.questions}
          />
          <div className="text-center">
            <button
              onClick={onDashboard}
              className="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
