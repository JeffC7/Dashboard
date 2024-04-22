import background_pic from '../img/background_pic.png'
import '../App.css';

export default function HomeScreen({ onCSVData }) {
    function parseCSVData(text) {
        // Split the text into lines
        const lines = text.split('\n');
      
        // Initialize an empty array to store parsed data
        const data = [];
      
        // Iterate over each line
        lines.forEach(line => {
          // Split each line into an array of values
          const values = line.split(',');
      
          // Push the array of values to the data array
          data.push(values);
        });
      
        return data;
    }
    
    const handleCSVUpload = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const parsedData = parseCSVData(data);
                onCSVData(parsedData);
            }
            reader.readAsText(file);
        }
    };

    return (
        <div className="HomeScreen">
            <div className='background-pic-container'> 
                <img className="background-pic" src={background_pic} />
            </div>
            <div className='home-screen-content'>
                <h1 className='home-screen-title'>View and Analyze Your Expense History</h1>
            
                <p className='upload-title'>Click on the "Choose File" button to upload a  CSV file:</p>

                <form onSubmit={handleCSVUpload} className="custom-form">
                    <label htmlFor="file-upload" className="custom-file-label">Choose CSV File</label>
                    <input type="file" id="file-upload" accept=".csv" className="custom-file-input" />
                    <button type="submit" className="custom-submit-button">Upload</button>
                </form>
            </div>
        </div>
    );
}