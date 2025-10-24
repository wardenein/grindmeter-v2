// components/BottomNav.js
export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-3 shadow-lg">
      <button className="flex flex-col items-center hover:text-yellow-400">
        <span className="text-xl">🏠</span>
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center hover:text-yellow-400">
        <span className="text-xl">📊</span>
        <span className="text-xs">Stats</span>
      </button>

      <button className="flex flex-col items-center hover:text-yellow-400">
        <span className="text-xl">⚙️</span>
        <span className="text-xs">Settings</span>
      </button>
    </nav>
  );
}
