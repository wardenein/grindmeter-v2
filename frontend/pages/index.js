import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-40
          md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">Grindmeter</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/workouts">Workouts</Link>
              </li>
              <li>
                <Link href="/food">Food</Link>
              </li>
              <li>
                <Link href="/plan-generator">Plan Generator</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/info">Info</Link>
              </li>
              <li>
                <Link href="/habits">Habits</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64 transition-all duration-300">
        <header className="bg-purple-600 text-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Grindmeter</h1>
          <button
            className="p-2 bg-white text-purple-600 rounded-md shadow-md md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
        </header>

        <main className="p-8 flex flex-col items-center justify-center flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Welcome to Grindmeter
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-lg">
            Track your workouts, nutrition, habits, and more — all in one place.
          </p>
          <Link
            href="/plan-generator"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </main>
      </div>
    </div>
  );
}
