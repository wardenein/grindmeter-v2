import BottomNav from '../components/BottomNav';

export default function Food() {
  const meals = [
    { name: 'Breakfast', calories: 350, carbs: 45, protein: 20, fat: 10 },
    { name: 'Lunch', calories: 600, carbs: 70, protein: 35, fat: 20 },
    { name: 'Dinner', calories: 500, carbs: 50, protein: 30, fat: 15 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20 px-4">
      <h1 className="text-2xl font-bold mt-8">Food / Macros</h1>

      <div className="mt-6 space-y-4">
        {meals.map((meal, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-sm">
            <h2 className="font-semibold">{meal.name}</h2>
            <p>Calories: {meal.calories}</p>
            <p>Carbs: {meal.carbs}g</p>
            <p>Protein: {meal.protein}g</p>
            <p>Fat: {meal.fat}g</p>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
