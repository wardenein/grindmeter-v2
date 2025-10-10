import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-[#0f0f10] text-gray-200 font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-[#18181b] border-r border-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-40
          md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-3xl font-extrabold mb-8 text-purple-500 tracking-tight">
            Grindmeter
          </h2>

          <nav className="flex-1">
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Workout', href: '/workout' },
                { name: 'Food', href: '/food' },
                { name: 'Plan Generator', href: '/plan-generator' },
                { name: 'Profile', href: '/profile' },
                { name: 'Info', href: '/info' },
                { name: 'Habits', href: '/habits' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 px-3 rounded-md hover:bg-purple-600/20 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <footer className="mt-auto text-xs text-gray-500">
            © {new Date().getFullYear()} Grindmeter
          </footer>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64 transition-all duration-300">
        <header className="bg-[#1c1c1f] border-b border-gray-800 text-white p-4 shadow-lg flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Grindmeter</h1>
          <button
            className="p-2 bg-purple-600 text-white rounded-md shadow-md md:hidden hover:bg-purple-700 transition"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-white">
            Welcome to <span className="text-purple-500">Grindmeter</span>
          </h2>
          <p className="text-gray-400 max-w-xl mb-10 text-lg">
            Your all-in-one tool to track workouts, nutrition, habits, and lifestyle.
            Stay consistent. Stay strong.
          </p>
          <Link
            href="/plan-generator"
            className="bg-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transform transition-all"
          >
            Get Started
          </Link>
        </main>
      </div>
    </div>
  );
}

