import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, FireIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function BottomNav() {
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Workout', path: '/workout', icon: FireIcon },
    { name: 'Food', path: '/food', icon: FoodIcon },
    { name: 'Profile', path: '/profile', icon: UserIcon },
  ];

  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-gray-900 text-white border-t border-gray-700 py-3">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = router.pathname === item.path;
        return (
          <Link key={item.name} href={item.path}>
            <div className={`flex flex-col items-center text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}>
              <Icon className="w-6 h-6" />
              {item.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
