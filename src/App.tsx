import Main from './components/Main';
import { GasStationProvider } from './providers/GasStationProvider';

function App() {
  return (
    <GasStationProvider>
      <Main />
    </GasStationProvider>
  );
}

export default App;
