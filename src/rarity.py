import csv

# Open the CSV file for reading and create a CSV reader object
with open('Full Punk Data - Rarity.csv', 'r') as input_file:
    csv_reader = csv.reader(input_file)

    # Sort the CSV rows by the first value in each row
    sorted_rows = sorted(csv_reader, key=lambda x: int(x[0]))

# Open a new CSV file for writing and create a CSV writer object
with open('rarity.csv', 'w', newline='') as output_file:
    csv_writer = csv.writer(output_file)

    # Write the sorted rows to the new CSV file
    for row in sorted_rows:
        csv_writer.writerow(row)
