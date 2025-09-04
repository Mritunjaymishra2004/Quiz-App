export default function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;
  return (
    <div className="w-full bg-gray-300 rounded-full h-3">
      <div
        className="bg-blue-500 h-3 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
