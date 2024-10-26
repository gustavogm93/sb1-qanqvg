import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const data = [
  { value: 155 },
  { value: 158 },
  { value: 156 },
  { value: 157 },
  { value: 159 },
  { value: 156 },
  { value: 158 },
  { value: 160 }
];

export function AssetOverview() {
  return (
    <div className="p-4">
      <p className="text-gray-500">Your total assets are</p>
      <h2 className="text-2xl font-bold mb-1">158.24 $USD</h2>
      <div className="flex items-center gap-1 mb-4">
        <span className="text-gray-500">and the weekly growth is</span>
        <span className="text-green-500">+2.51%</span>
      </div>
      
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Personal</p>
          <p className="font-semibold">$53.46</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Portfolio</p>
          <p className="font-semibold">$104.78</p>
        </div>
      </div>

      <div className="h-32 w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e20"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}