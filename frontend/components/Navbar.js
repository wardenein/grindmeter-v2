import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-20 md:hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">Grindmeter</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-purple-700">Home</Link>
          <Link href="/workout" className="hover:text-purple-700">Workouts</Link>
          <Link href="/food" className="hover:text-purple-700">Food</Link>
          <Link href="/plan-generator" className="hover:text-purple-700">Plan Generator</Link>
          <Link href="/profile" className="hover:text-purple-700">Profile</Link>
          <Link href="/habits" className="hover:text-purple-700">Habits</Link>
          <Link href="/info" className="hover:text-purple-700">Info</Link>
        </div>
      </div>
    </nav>
  );
}
