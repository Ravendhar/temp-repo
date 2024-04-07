import React from 'react';
import Navbar from './Components/Navbar/navbar.jsx'; 
import CobProgressChart from './Components/CobProgressChart/cobProgressChart.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import cobSchedule from './Components/CobSchedule/cobSchedule.jsx';
import CobRunningBatch from './Components/CobStage_RunningBatch/cobRunningBatch.jsx';
import CobClock from './Components/CobClock/cobClock.jsx';
import Table from './Components/CobRuntime_CobCompletiontime/cobRuntime_CobCompletiontime.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />    
          <Routes>
            <Route path="/" element={<Table />} /> {/*CobProgressChart*/}
            {/* <Route path="/Setting" element={<cobSchedule />} /> */}

          </Routes>
      </div>
    </Router>
  );
}

export default App;
