import './App.css';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [csvData, setCsvData] = useState([]);

    const handleCSVData = (data) => {
        setCsvData(data);
        setCurrentScreen('dashboard');
    }

    return (
        <div className="App">
            {currentScreen === 'home' && <HomeScreen onCSVData={handleCSVData} />}
            {currentScreen === 'dashboard' && <Dashboard csvData={csvData} setCsvData={setCsvData} />}
        </div>
    );
}

export default App;
