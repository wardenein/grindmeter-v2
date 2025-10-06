import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Grindmeter</div>
        <div className="space-x-6">
          <Link href="/" className="hover:text-secondary">Home</Link>
          <Link href="/workouts" className="hover:text-secondary">Workouts</Link>
          <Link href="/nutrition" className="hover:text-secondary">Nutrition</Link>
          <Link href="/quiz" className="hover:text-secondary">Quiz</Link>
          <Link href="/habits" className="hover:text-secondary">Habits</Link>
          <Link href="/info" className="hover:text-secondary">Info</Link>
        </div>
      </div>
    </nav>
  )
}

