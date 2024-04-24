#!/usr/bin/python3
"""
A script that adds all command line arguments to a list and saves them
to a JSON file. This script utilizes two external functions to handle
JSON file operations.

`save_to_json_file` function from `5-save_to_json_file.py` is used to save data to a file.
`load_from_json_file` function from `6-load_from_json_file.py` is used to load data from a file.

The resultant list is stored in a file named 'add_item.json'.
If the file does not exist, it is created.
"""

import sys
import os
import json

# Import necessary functions
from 5-save_to_json_file import save_to_json_file
from 6-load_from_json_file import load_from_json_file

def main():
    """Main function that handles the operations of adding items to list and saving to file."""
    filename = "add_item.json"
    items = []

    # Check if file exists and load existing data if it does
    if os.path.exists(filename):
        try:
            items = load_from_json_file(filename)
        except json.JSONDecodeError:
            # In case json file is empty or corrupted, initialize items as an empty list
            items = []
    
    # Add command line arguments to the list
    items.extend(sys.argv[1:])

    # Save updated list back to the file
    save_to_json_file(items, filename)

if __name__ == "__main__":
    main()
