import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

export default function Quiz({ onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("/questions.json")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[current] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSkip = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleSubmit = () => {
    const score = questions.reduce(
      (acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0),
      0
    );
    const grade =
      score / questions.length >= 0.8
        ? "A"
        : score / questions.length >= 0.6
        ? "B"
        : score / questions.length >= 0.4
        ? "C"
        : "D";

    onFinish({ score, total: questions.length, grade, answers, questions });
  };

  if (!questions.length) return <p className="text-white text-center">Loading...</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen w-full flex items-center justify-center">
        <div className="space-y-6 w-full max-w-3xl">
          <ProgressBar current={current} total={questions.length} />
          <QuestionCard
            question={questions[current]}
            selected={answers[current]}
            onSelect={handleSelect}
          />
          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleSkip}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Skip
            </button>
            {current === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Final Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
