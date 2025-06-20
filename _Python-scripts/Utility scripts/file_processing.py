#!/usr/bin/env python3
"""
file_processing.py - A module to process files

"""
import os

def string_in_file(file_path, search_string, case_sensitive=True):
    """
    Check if a string exists in a file.
    
    Args:
        file_path (str): Path to the file to search in
        search_string (str): String to search for
        case_sensitive (bool, optional): Whether the search should be case sensitive. 
                                        Defaults to True.
    
    Returns:
        bool: True if string is found, False otherwise
        
    Raises:
        FileNotFoundError: If the specified file does not exist
        PermissionError: If the file cannot be read due to permission issues
        IsADirectoryError: If the specified path is a directory, not a file
        UnicodeDecodeError: If the file contains characters that cannot be decoded
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
            if not case_sensitive:
                content = content.lower()
                search_string = search_string.lower()
                
            return search_string in content
            
    except UnicodeDecodeError:
        # Try to read the file in binary mode for non-text files
        try:
            with open(file_path, 'rb') as file:
                binary_content = file.read()
                binary_search = search_string.encode('utf-8')
                return binary_search in binary_content
        except Exception as e:
            raise UnicodeDecodeError(f"Could not decode file content: {str(e)}")

def keep_lines_up_to_examples(input_file, output_file):
    """
    Read the input file, find the only occurrence of "Examples", and write to the output file
    only the lines that appear before the line containing "Examples".
    
    Args:
        input_file (str): Path to the input file to read
        output_file (str): Path to the output file to write
    """
    try:
        if os.path.exists(output_file):            
            response = input(f"Output file '{output_file}' already exists. Overwrite? (y/n): ")
            if response.lower() != 'y':
                print("Operation cancelled.")
                return
                
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        filtered_lines = []
        for line in lines:
            if "Examples" in line:
                break
            filtered_lines.append(line)
        
        # https://www.w3schools.com/python/python_file_write.asp
        with open(output_file, 'w', encoding='utf-8') as f:
            f.writelines(filtered_lines)
            
        print(f"Successfully filtered content and wrote to {output_file}")
        
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")