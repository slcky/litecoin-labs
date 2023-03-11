import json
import csv

# load the JSON data from file
with open('moon.json', 'r') as f:
    data = json.load(f)

# create a list of dictionaries to hold the CSV data
csv_data = []
for i, item in enumerate(data):
    csv_data.append({
        'order': i+1,
        'number': item['number'],
        'explorer': item['explorer']
    })

# write the CSV data to file
with open('moon.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['order', 'number', 'explorer'])
    writer.writeheader()
    writer.writerows(csv_data)
