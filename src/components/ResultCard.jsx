export default function ResultCard({ score, total, answers, questions }) {
  const grade =
    score / total >= 0.8 ? "A" :
    score / total >= 0.6 ? "B" :
    score / total >= 0.4 ? "C" : "D";

  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <p className="mb-2 text-lg">Score: {score} / {total}</p>
      <p className="mb-4 text-lg">Grade: {grade}</p>
      
      <h3 className="text-xl font-semibold mb-2">Correct Answers:</h3>
      <ul className="list-disc pl-6">
        {questions.map((q, idx) => (
          <li key={idx} className="mb-1">
            <span className="font-semibold">{q.question}</span> <br/>
            ✅ Correct: {q.answer} <br/>
            {answers[idx] !== q.answer && (
              <span className="text-red-500">❌ Your Answer: {answers[idx] || "Not Attempted"}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
