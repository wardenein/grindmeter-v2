import BottomNav from '../components/BottomNav';
import ProgressBar from '../components/ProgressBar';
import Agenda from '../components/Agenda';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20 px-4">
      <h1 className="text-2xl font-bold mt-8">Profile</h1>

      <div className="mt-6 space-y-4">
        <div className="bg-gray-800 p-4 rounded-sm">
          <h2 className="font-semibold mb-2">Rank</h2>
          <p>Intermediate Athlete</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-sm">
          <h2 className="font-semibold mb-2">Progress</h2>
          <ProgressBar progress={0.65} />
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Agenda / Habits</h2>
          <Agenda />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
