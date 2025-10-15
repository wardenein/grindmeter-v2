export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-800 rounded-sm h-4">
      <div
        className="bg-white h-4 rounded-sm"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
}
