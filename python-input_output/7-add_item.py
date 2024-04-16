#!/usr/bin/python3
"""Module to define a base geometry class, BaseGeometry."""

class BaseGeometry:
    """Represent the base functionality for geometry-related operations.

    Methods:
        area: Calculates the area of a geometric object.
        integer_validator: Validates that a given value is a positive integer.
    """

    def area(self) -> None:
        """Raise an Exception as a placeholder for actual area calculation methods in derived classes.

        Raises:
            Exception: Indicates that the area method is not implemented.
        """
        raise Exception("area() is not implemented")

    def integer_validator(self, name: str, value: int) -> None:
        """Validate that a parameter is a positive integer.

        Args:
            name (str): The name of the parameter.
            value (int): The parameter to validate.

        Raises:
            TypeError: If value is not an integer.
            ValueError: If value is less than or equal to 0.
        """
        if not isinstance(value, int):
            raise TypeError(f"{name} must be an integer")
        if value <= 0:
            raise ValueError(f"{name} must be greater than 0")
