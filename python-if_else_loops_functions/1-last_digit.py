#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

# Get the last digit of the number
last_digit = abs(number) % 10

# Determine the sign of the number
if number > 0:
    sign = ""
elif number < 0:
    sign = "-"
else:
    sign = ""

# Determine the output message based on the last digit and sign
if last_digit > 5:
    message = f"and is greater than 5"
elif last_digit == 0:
    message = f"and is 0"
else:
    message = f"and is less than 6 and not 0"

# Print the output
print(f"The string Last digit of {sign}{abs(number)} is {last_digit} {message}")
