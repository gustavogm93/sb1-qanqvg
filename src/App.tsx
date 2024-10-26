import { Header } from './components/Header';
import { AssetOverview } from './components/AssetOverview';
import { ActionButtons } from './components/ActionButtons';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white">
      <Header />
      <AssetOverview />
      <ActionButtons />
      <TransactionList />
    </div>
  );
}

export default App;