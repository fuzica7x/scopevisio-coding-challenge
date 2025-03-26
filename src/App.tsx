import { GasStationProvider } from './Provider/GasStationProvider';
import Main from './components/Main';

function App() {
  return (
    <GasStationProvider>
      <Main />
    </GasStationProvider>
  );
}

export default App;
