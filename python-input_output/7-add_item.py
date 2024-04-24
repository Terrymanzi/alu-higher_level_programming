#!/usr/bin/python3
'''task 7'''

import sys
import os
import json

def save_to_json_file(my_obj, filename):
    """Saves an object to a text file using a JSON representation."""
    with open(filename, 'w') as f:
        json.dump(my_obj, f)

def load_from_json_file(filename):
    """Creates an object from a “JSON file”."""
    with open(filename, 'r') as f:
        return json.load(f)

if __name__ == "__main__":
    filename = "add_item.json"
    
    # Load existing data or initialize an empty list if the file does not exist.
    if os.path.exists(filename):
        items = load_from_json_file(filename)
    else:
        items = []

    # Extend the list with command line arguments passed to the script.
    items.extend(sys.argv[1:])
    
    # Save the updated list back to the file.
    save_to_json_file(items, filename)
