export default function Dashboard({ onStart, lastResult }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen w-full flex items-center justify-center">
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-md w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Quiz App 🎯</h1>
          <p className="mb-6 text-lg">Test your knowledge and see your grade!</p>
          <button
            onClick={onStart}
            className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-600 transition"
          >
            Start Quiz
          </button>

          {lastResult && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Last Attempt</h2>
              <p>Score: {lastResult.score} / {lastResult.total}</p>
              <p>Grade: {lastResult.grade}</p>
              <button
                onClick={onStart}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
