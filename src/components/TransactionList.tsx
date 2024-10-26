interface Transaction {
  name: string;
  amount: string;
  date: string;
  type: 'receive' | 'send';
}

const transactions: Transaction[] = [
  {
    name: 'Buy Tether',
    amount: '+50.00',
    date: '15 Sep • 9:43 USDT',
    type: 'receive'
  },
  {
    name: 'Convert USDT to SOL',
    amount: '0.725',
    date: 'Today • 9:43 USDT',
    type: 'send'
  }
];

export function TransactionList() {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Last transactions</h3>
        <button className="text-sm text-gray-500">View all</button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{tx.name}</p>
              <p className="text-sm text-gray-500">{tx.date}</p>
            </div>
            <span className={tx.type === 'receive' ? 'text-green-500' : ''}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}