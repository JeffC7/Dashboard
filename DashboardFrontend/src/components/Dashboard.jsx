import '../App.css';

export default function Dashboard() {
    return (
        <div className='dashboard-container'>
            <div className='dashboard'>
                <h1 className='title1'>Your Dashboard</h1>
                <div className="panels-container">
                    <div className="panel">
                        <h2 className='title2'>Total Money Spent:</h2>
                        <div className='money-value'></div>
                    </div>
                    <div className="panel">
                        <h2 className='title2'>Most Spent In A Month:</h2>
                        <div className='money-value'></div>
                    </div>
                    <div className="panel">
                        <h2 className='title2'>Average Monthly Expenses:</h2>
                        <div className='money-value'></div>
                    </div>
                    <div className="panel">
                        <h2 className='title2'>Most Spent On:</h2>
                        <div className='money-value'></div>
                    </div>
                </div>
                
                <div className="graphs-container">
                    <div className="graph">
                        <h2 className='title3'>Frequency By Month:</h2>

                    </div>
                    <div className="graph">
                        <h2 className='title3'>Monthly Spendings:</h2>

                    </div>
                    <div className="graph">
                        <h2 className='title3'>Frequency By Category:</h2>

                    </div>
                    <div className="graph">
                        <h2 className='title3'>Spendings By Category:</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}