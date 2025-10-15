import BottomNav from '../components/BottomNav';
import WorkoutPlanList from '../components/WorkoutPlanList';

export default function Workout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20 px-4">
      <h1 className="text-2xl font-bold mt-8">Workout</h1>

      <div className="flex flex-col space-y-4 mt-6">
        <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-sm py-3 text-white font-semibold">
          Create Workout Plan
        </button>

        <button className="w-full bg-gray-700 hover:bg-gray-600 rounded-sm py-3 text-white font-semibold">
          Generate Workout Plan
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">My Workout Plans</h2>
        <WorkoutPlanList />
      </div>

      <BottomNav />
    </div>
  );
}
