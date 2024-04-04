import React, { useState } from 'react';
import axios from 'axios';
export default function Statement({ csvData, setCsvData}) {

    const [editingCell, setEditingCell] = useState(null);

    const handleEdit = (rowIndex, cellIndex) => {
        setEditingCell({ rowIndex, cellIndex });
    };

    const handleKeyDown = (e, rowIndex, cellIndex, value) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior (e.g., form submission)
            handleSave(rowIndex, cellIndex, value); // Save changes
            setEditingCell(null); // End editing
        }
    };
    
    const handleSave = (rowIndex, cellIndex, value) => {
        const newCsvData = [...csvData];
        newCsvData[rowIndex + 1][cellIndex] = value;
        setCsvData(newCsvData);
        console.log(csvData)
    };

    const handleDeleteRow = (rowIndex) => {
        const newCsvData = [...csvData];
        newCsvData.splice(rowIndex + 1, 1);
        setCsvData(newCsvData);
    };

    const handleSubmit = async () => {
        try {
            const csvContent = csvData.map(row => row.join(',')).join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });

            const formData = new FormData();
            formData.append('csv', blob, 'data.csv');

            const response = await axios.post('http://127.0.0.1:5000/parseData', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='csv-data-table'>
          <h1 className='title1'>CSV Data</h1>
          <table>
            <thead>
              <tr>
                {csvData.length > 0 && csvData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(1, -1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                            {editingCell && editingCell.rowIndex === rowIndex && editingCell.cellIndex === cellIndex ?
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) => handleSave(rowIndex, cellIndex, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, rowIndex, cellIndex, cell)}
                                />
                                :
                                <span onClick={() => handleEdit(rowIndex, cellIndex)}>{cell}</span>
                            }
                        </td>
                    ))}
                    <td className='button-container'>
                        <button className='delete-button' onClick={() => handleDeleteRow(rowIndex)}>Delete</button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      );
}