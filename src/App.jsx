import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

export default function App() {
  const [stage, setStage] = useState("dashboard");
  const [lastResult, setLastResult] = useState(null);

  const handleStart = () => setStage("quiz");

  const handleFinish = (result) => {
    setLastResult(result);
    setStage("results");
  };

  const handleDashboard = () => setStage("dashboard");

  return (
    <>
      {stage === "dashboard" && (
        <Dashboard onStart={handleStart} lastResult={lastResult} />
      )}
      {stage === "quiz" && <Quiz onFinish={handleFinish} />}
      {stage === "results" && (
        <Results result={lastResult} onDashboard={handleDashboard} />
      )}
    </>
  );
}
