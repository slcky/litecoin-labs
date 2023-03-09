import csv

# Load punkdata from CSV file
with open('punkdata_updated.csv') as f:
    punkdata = list(csv.DictReader(f))

# Load metadata attributes from CSV file
with open('metadata_attributes.csv') as f:
    metadata = list(csv.DictReader(f))

# Combine the two lists of dictionaries
merged = punkdata + metadata

# Write merged data to a CSV file
with open('merged_data.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=merged[0].keys())
    writer.writeheader()
    writer.writerows(merged)
