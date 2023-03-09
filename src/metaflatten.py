import json
import csv

# Load metadata from JSON file
with open('litecoin-labs\src\metadata.json') as f:
    metadata_list = json.load(f)

# Extract all unique trait types
trait_types = set()
for metadata in metadata_list:
    attributes = metadata["attributes"]
    for attribute in attributes:
        trait_types.add(attribute["trait_type"])
trait_types = sorted(list(trait_types))

# Flatten the attributes for each metadata dictionary
flattened = []
for metadata in metadata_list:
    row = {}
    attributes = metadata["attributes"]
    for attribute in attributes:
        row[attribute["trait_type"]] = attribute["value"]
    flattened.append(row)

# Write flattened attributes to CSV file
with open('metadata_attributes.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=trait_types)
    writer.writeheader()
    writer.writerows(flattened)
