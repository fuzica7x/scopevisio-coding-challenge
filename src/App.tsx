import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Imprint from './pages/Imprint';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </Router>
  );
}

export default App;
