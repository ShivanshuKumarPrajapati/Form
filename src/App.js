import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import InitialInfo from './Component/Initial';
import PartyInfo from './Component/PartyInfoForm';
import LogisticsInfo from './Component/LogisticsForm';
import AdditionalServiceInfo from './Component/AdditionalService';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <InitialInfo /> } />
          <Route path="/party" element={ <PartyInfo /> } />
          <Route path="/logistics" element={ <LogisticsInfo /> } />
          <Route path="/additional" element={ <AdditionalServiceInfo /> } />
        </Routes>
      </Router>
  );
}

export default App;
