export default function Agenda() {
  const items = ['Sleep: 7h', 'Supplements: Taken', 'Meditation: Done'];

  return (
    <div className="bg-gray-800 p-4 rounded-sm">
      <h2 className="font-semibold mb-2">Agenda</h2>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
