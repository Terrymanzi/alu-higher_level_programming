#!/usr/bin/python3
"""
A script that adds command-line arguments to a list saved in a JSON file.
This script supports adding new items across multiple runs.
"""
import sys
from os import path
import json

def save_to_json_file(my_obj, filename):
    """Write an object to a text file using JSON representation."""
    with open(filename, "w") as f:
        json.dump(my_obj, f)

def load_from_json_file(filename):
    """Create a Python object from a JSON file."""
    with open(filename) as f:
        return json.load(f)

# File to store the list
filename = 'add_item.json'

# Check if file exists and load existing data if it does
if path.exists(filename):
    try:
        items = load_from_json_file(filename)
    except json.JSONDecodeError:  # in case the file is empty and thus an error occurs
        items = []
else:
    items = []

# Add command-line arguments to the list
items.extend(sys.argv[1:])

# Save the updated list to the file
save_to_json_file(items, filename)
