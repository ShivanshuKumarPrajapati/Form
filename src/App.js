import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Final from './Component/Final';
import InitialInfo from './Component/Initial';
import PartyInfo from './Component/PartyInfoForm';
import LogisticsInfo from './Component/LogisticsForm';
import AdditionalServiceInfo from './Component/AdditionalService';

function App() {
  return (
		<Router>
			<Routes>
				<Route exact path="/" element={< InitialInfo />} />
				<Route path="/party" element={<PartyInfo />} />
				<Route path="/logistics" element={<LogisticsInfo />} />
				<Route path="/additional" element={ <AdditionalServiceInfo /> } />
				<Route path="/final" element={<Final />} />
			</Routes>
		</Router>
	);
}

export default App;
