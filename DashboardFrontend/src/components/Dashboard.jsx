import '../App.css';
import { Chart } from "react-google-charts";

export default function Dashboard(props) {
    let total_expenses = props.dashboardData[0];
    let most_spent_in_a_month = props.dashboardData[1][1];
    let average_monthly_expenses = props.dashboardData[2];
    let most_spent_on = props.dashboardData[3][0];

    const freq_by_month_options = {
        legend: {position: 'none'},
    }
    
    const freq_by_month_data = [
        ["Month", "Frequency"],
        ["Jan", props.dashboardData[4][1]],
        ["Feb", props.dashboardData[4][2]],
        ["Mar", props.dashboardData[4][3]],
        ["April", props.dashboardData[4][4]],
        ["May", props.dashboardData[4][5]],
        ["June", props.dashboardData[4][6]],
        ["July", props.dashboardData[4][7]],
        ["Aug", props.dashboardData[4][8]],
        ["Sept", props.dashboardData[4][9]],
        ["Oct", props.dashboardData[4][10]],
        ["Nov", props.dashboardData[4][11]],
        ["Dec", props.dashboardData[4][12]],
    ]

    const spending_by_month_data_options = {
        legend: {position: 'none'},
        hAxis: {title: 'Month'},
        vAxis: {title: 'Amount Spent'},
    }

    const spending_by_month_data = [
        ["Month", "Amount Spent"],
        ["Jan", props.dashboardData[5][1]],
        ["Feb", props.dashboardData[5][2]],
        ["Mar", props.dashboardData[5][3]],
        ["April", props.dashboardData[5][4]],
        ["May", props.dashboardData[5][5]],
        ["June", props.dashboardData[5][6]],
        ["July", props.dashboardData[5][7]],
        ["Aug", props.dashboardData[5][8]],
        ["Sept", props.dashboardData[5][9]],
        ["Oct", props.dashboardData[5][10]],
        ["Nov", props.dashboardData[5][11]],
        ["Dec", props.dashboardData[5][12]],
    ]

    const freq_by_category_options = {
        legend: {position: 'none'},
        hAxis: {format: 'short'},
    }

    let freq_by_category = props.dashboardData[6];
    freq_by_category = Object.entries(freq_by_category);
    freq_by_category.sort((a, b) => b[1] - a[1]);
    freq_by_category = freq_by_category.slice(0, 10);
    freq_by_category = [
        ["Category", "Frequency"],
        ...freq_by_category
    ]

    const spending_by_category_options = {
        legend: {position: 'none'},
        hAxis: {format: 'short'},
    }

    let spending_by_category = props.dashboardData[7];
    spending_by_category = Object.entries(spending_by_category);
    spending_by_category.sort((a, b) => b[1] - a[1]);
    spending_by_category = spending_by_category.slice(0, 10);
    spending_by_category = [
        ["Category", "Amount Spent"],
        ...spending_by_category
    ]

    return (
        <div className='dashboard-container'>
            <div className='dashboard'>
                <h1 className='title1'>Your Dashboard</h1>
                <div className="panels-container">
                    <div className="panel">
                        <h2 className='title2'>Total Money Spent:</h2>
                        <div className='money-value'>{"$"+ total_expenses}</div>
                    </div>
                    <div className="panel">
                        <h2 className='title2'>Monthly Highest:</h2>
                        <div className='money-value'>{"$"+ most_spent_in_a_month}</div>
                    </div>
                    <div className="panel">
                        <h2 className='title2'>Average Monthly:</h2>
                        <div className='money-value'>{"$"+ average_monthly_expenses}</div>
                    </div>
                    <div className="panel">
                        <h2 className='title2'>Most Spent On:</h2>
                        <div className='money-value2'>{most_spent_on}</div>
                    </div>
                </div>
                
                <div className="graphs-container">
                    <div className="graph">
                        <h2 className='title3'>Frequency By Month:</h2>
                        <Chart
                            chartType="Bar"
                            width="95%"
                            height="100%"
                            data={freq_by_month_data}
                            options={freq_by_month_options}
                        />
                    </div>
                    <div className="graph">
                        <h2 className='title3'>Monthly Spendings:</h2>
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="100%"
                            data={spending_by_month_data}
                            options={spending_by_month_data_options}
                        />
                    </div>
                    <div className="graph">
                        <h2 className='title3'>Frequency By Category:</h2>
                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height="100%"
                            data={freq_by_category}
                            options={freq_by_category_options}
                        />
                    </div>
                    <div className="graph">
                        <h2 className='title3'>Spendings By Category:</h2>
                        <Chart
                            chartType="ColumnChart"
                            width="100%"
                            height="100%"
                            data={spending_by_category}
                            options={spending_by_category_options}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}