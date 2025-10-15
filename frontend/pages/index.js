import BottomNav from '../components/BottomNav';
import ProgressBar from '../components/ProgressBar';
import Agenda from '../components/Agenda';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20 px-4">
      <h1 className="text-2xl font-bold mt-8">Home</h1>

      <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-sm py-3 mt-6 text-white font-semibold">
        Start Workout Without Plan
      </button>

      <div className="mt-6">
        <Agenda />
      </div>

      <div className="mt-6">
        <ProgressBar progress={0.45} />
      </div>

      <BottomNav />
    </div>
  );
}
