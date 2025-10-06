import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-100 w-64 shadow-lg transform ${{
          true: 'translate-x-0',
          false: '-translate-x-64',
        }[isSidebarOpen]} transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Navigation</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <a className="text-gray-800 hover:text-blue-500">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/workouts">
                  <a className="text-gray-800 hover:text-blue-500">Workouts</a>
                </Link>
              </li>
              <li>
                <Link href="/nutrition">
                  <a className="text-gray-800 hover:text-blue-500">Nutrition</a>
                </Link>
              </li>
              <li>
                <Link href="/habits">
                  <a className="text-gray-800 hover:text-blue-500">Habits</a>
                </Link>
              </li>
              <li>
                <Link href="/agenda">
                  <a className="text-gray-800 hover:text-blue-500">Agenda</a>
                </Link>
              </li>
              <li>
                <Link href="/quiz">
                  <a className="text-gray-800 hover:text-blue-500">Quiz</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <header className="bg-primary text-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Grindmeter</h1>
          <button
            className="p-2 bg-white text-primary rounded-md shadow-md focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
        </header>
        <main className="p-6">
          <h2 className="text-3xl font-bold mb-4">Welcome to Grindmeter</h2>
          <p className="text-gray-700 mb-8">
            Track your workouts, nutrition, habits, and more — all in one place.
          </p>
          <a
            href="/quiz"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
          >
            Get Started
          </a>
        </main>
      </div>
    </div>
  );
}