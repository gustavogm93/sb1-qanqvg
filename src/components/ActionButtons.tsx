import { IoSendOutline, IoReceiveOutline, IoSwapHorizontalOutline, IoLogOutOutline } from 'react-icons/io5';

export function ActionButtons() {
  const actions = [
    { icon: <IoSendOutline />, label: 'Send' },
    { icon: <IoReceiveOutline />, label: 'Receive' },
    { icon: <IoSwapHorizontalOutline />, label: 'Swap' },
    { icon: <IoLogOutOutline />, label: 'Withdraw' }
  ];

  return (
    <div className="flex justify-between px-4 mb-6">
      {actions.map((action, index) => (
        <button key={index} className="flex flex-col items-center gap-1">
          <div className="p-3 bg-gray-100 rounded-full">
            {action.icon}
          </div>
          <span className="text-sm">{action.label}</span>
        </button>
      ))}
    </div>
  );
}