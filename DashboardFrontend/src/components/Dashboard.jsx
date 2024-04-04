import '../App.css';

export default function Dashboard() {
    return (
        <div className='dashboard-container'>
            <div className='dashboard'>
                <h1 className='title1'>Your Dashboard</h1>
                <div className="panels-container">
                    <div className="panel"></div>
                    <div className="panel"></div>
                    <div className="panel"></div>
                    <div className="panel"></div>
                </div>
                
                <div className="graphs-container">
                    <div className="graph"></div>
                    <div className="graph"></div>
                    <div className="graph"></div>
                    <div className="graph"></div>
                </div>
            </div>
        </div>
    )
}