import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-center">
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">GrindMeter v2</h1>
        <p className="text-gray-600 mb-6">Track your grind progress efficiently.</p>

        {/* Example slider */}
        <input
          type="range"
          min="0"
          max="100"
          className="w-3/4"
          onChange={(e) => console.log(e.target.value)}
        />
      </main>

      <BottomNav />
    </div>
  );
}
