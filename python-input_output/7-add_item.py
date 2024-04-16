#!/usr/bin/python3
"""
A script that adds all command-line arguments to a list and saves them to a file.
"""
import sys
from os import path
from 5-save_to_json_file import save_to_json_file
from 6-load_from_json_file import load_from_json_file

# File to store the list
filename = 'add_item.json'

# Check if file exists and load existing data if it does
if path.exists(filename):
    items = load_from_json_file(filename)
else:
    items = []

# Add command-line arguments to the list
items.extend(sys.argv[1:])

# Save the updated list to the file
save_to_json_file(items, filename)

