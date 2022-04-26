# Imports
from pyhive import hive
import pandas as pd
import json
import sys

# Parse input parameters
if len(sys.argv) != 3:
        raise Exception("Exactly 2 arguments are required!")

# Parse inputs
input_json = json.loads(sys.argv[1])
output_file = sys.argv[2]

# Establish connection to HiveQL
conn = hive.Connection(host="hive-cluster-m.us-central1-f.c.single-object-307119.internal", port = 10000, username = "hive")

# Print input search term
print(input_json)
search_term = input_json['term']
print(search_term)

# Run the query
output = {}
cursor = conn.cursor()
cursor.execute("SELECT * FROM search_log2 WHERE search_term = '$parameter'".replace('$parameter', search_term))
print('Query Complete')

# Store results
for result in cursor.fetchall():
        #print(result)
        #output.append(result[1])
        output["results"] = json.loads(result[1])

print(output)

print('Converting to JSON format')
json_object = json.dumps(output)

print('Saving as JSON file')
with open(output_file, "w") as outfile:
        outfile.write(json_object)

print('Output saved as JSON file')
