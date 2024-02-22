import pandas as pd
import re
import pprint
from flask import Flask, request
from flask_cors import CORS

'''
1. Total annual spending (DONE)
2. Total average monthly spending (DONE)
3. Total spending by month (DONE)
4. Total spending by category (DONE)
5. Frequency of transactions by month (DONE)
6. Frequency of transactions by category (DONE)
'''

app = Flask(__name__)
CORS(app)

@app.route('/parseData', methods=['POST'])
def parseData():
    file = request.files['csv']

    # Read in the csv file
    df = pd.read_csv(file)

    # Convert the date column to a list
    dates = df['Date'].to_list()

    # Regular expression pattern to match the date format. Want to extract the month
    regex_pattern = r"(\d{1,2})/\d{1,2}/\d{4}"

    # Create dictionaries to store the frequency of transactions by month, the total spending by month, frequency of transactions by category, and total spending by category
    month_freq_dict = {}
    month_spending_dict = {}
    category_freq_dict = {}
    category_spending_dict = {}

    # Filter out the 'PAYMENT THANK YOU' rows
    df.drop(df[df['Description'] == 'PAYMENT THANK YOU'].index, inplace=True)

    # Loop through the dates and use the regular expression to extract the month and store frequency in the dictionary
    for date in dates:
        match = re.search(regex_pattern, date)
        if match:
            month_freq_dict[match.group(1)] = month_freq_dict.get(match.group(1), 0) + 1
        else:
            print('No match')

    # Merge the Credit column with the Debit column and store the result in the Debit column
    df['Debit']= df['Debit'].fillna(df['Credit'].abs())

    # Convert the date column to a datetime object
    df['Date'] = pd.to_datetime(df['Date'], format='%m/%d/%Y')

    # Loop through the months and store the total spending for each month in the dictionary
    for i in range(1, 13):
        sum_for_month = round(df[df['Date'].dt.month == i]['Debit'].sum(), 2)
        month_spending_dict[i] = sum_for_month

    # Calculate the total annual spending and the average monthly spending
    total_spending = sum(month_spending_dict.values())
    avg_monthly_spending = round(total_spending / 12, 2)
    
    # Loop through the descriptions and store the frequency of transactions by category
    df['Description'] = df['Description'].apply(lambda x: x.capitalize())
    for category in df['Description']:
        category_freq_dict[category] = category_freq_dict.get(category, 0) + 1
    
    # Loop through the descriptions and store the total spending by category
    sum_by_category = df.groupby('Description')['Debit'].sum()
    for index, value in sum_by_category.items():
        category_spending_dict[index] = round(value, 2)
    
    pprint.pprint(category_freq_dict)
    pprint.pprint(category_spending_dict)
    return "yo"

if __name__ == '__main__':
    app.run(debug=True)
    

