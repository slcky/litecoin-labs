import csv

with open('litecoin-labs\src\punkdata.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    punk_list = []
    for row in reader:
        row['Image'] = row['Image'].replace('preview', 'content').strip()
        punk_list.append(row)

with open('litecoin-labs\src\punkdata_updated.csv', mode='w', newline='') as csvfile:
    fieldnames = ['Asset #', 'Inscription #', 'Image']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for punk in punk_list:
        writer.writerow({'Asset #': punk['Asset #'], 'Inscription #': punk['Inscription #'], 'Image': punk['Image']})

print(punk_list)
