import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Grindmeter
        </h1>
        <p className="text-lg text-gray-700 mb-8">
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
  )
}
