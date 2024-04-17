import './App.css';
import HomeScreen from './components/HomeScreen';
import Statement from './components/Statement';
import Dashboard from './components/Dashboard';

import { useState } from 'react';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [csvData, setCsvData] = useState([]);
    const [dashboardData, setDashboardData] = useState([]);

    const handleCSVData = (data) => {
        setCsvData(data);
        setCurrentScreen('statement');
    }

    return (
        <div className="App">
            {currentScreen === 'home' && <HomeScreen onCSVData={handleCSVData} />}
            {currentScreen === 'statement' && <Statement csvData={csvData} setCsvData={setCsvData} setDashboardData={setDashboardData} setCurrentScreen={setCurrentScreen}/>}
            {currentScreen === 'dashboard' && <Dashboard dashboardData={dashboardData} />}
        </div>
    );
}

export default App;
