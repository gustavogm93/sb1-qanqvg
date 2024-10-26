import { IoNotificationsOutline } from 'react-icons/io5';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
        <div>
          <span className="text-sm">Hey</span>
          <p className="font-semibold">Sherman</p>
        </div>
      </div>
      <button className="p-2">
        <IoNotificationsOutline className="w-6 h-6" />
      </button>
    </header>
  );
}